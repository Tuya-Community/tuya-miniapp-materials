const fs = require('fs')
const path = require('path')
const appJson = require('./app.json')

const handlers = {
  '.plist': {
    to: '.html',
    handler: (filePath) => {
      const newFilePath = filePath.replace('.plist', '.html')
      fs.rename(filePath, newFilePath, (err) => {
        if (err) {
          console.error('无法重命名文件:', filePath, err)
          return
        }
        console.log('文件重命名成功:', newFilePath)
      })
    },
  },
}

// 指定要查找的目录
const directoryPath = appJson.webviewRoot

if (!directoryPath) {
  console.log('请先配置app.json中的webviewRoot字段')
}

// 检查目录是否存在
const webviewRoot = path.join(__dirname, directoryPath)
if (!fs.existsSync(webviewRoot)) {
  console.error('webviewRoot目录不存在:', webviewRoot)
  return
}

const assetsPath = path.join(webviewRoot, 'assets')
if (!fs.existsSync(assetsPath)) {
  console.error('asset目录不存在:', assetsPath)
  return
}

// 处理文件转换
function handleDir(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error('无法读取目录:', err)
      return
    }

    files.forEach((file) => {
      const filePath = path.join(dirPath, file)

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('无法获取文件状态:', filePath, err)
          return
        }

        if (stats.isDirectory()) {
          handleDir(filePath)
        } else {
          if (path.extname(file) === '.json') {
            fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
                console.error('无法读取文件:', filePath, err)
                return
              }

              const keys = Object.keys(handlers)

              keys.forEach((key) => {
                const handler = handlers[key]
                const reg = new RegExp(key, 'g')
                data = data.replace(reg, handler.to)
              })

              // 写入更新后的内容到同一文件
              fs.writeFile(filePath, data, 'utf8', (err) => {
                if (err) {
                  console.error('无法写入文件:', filePath, err)
                  return
                }
                console.log(`已更新: ${filePath}`)
              })
            })
          }
          const fileType = path.extname(file)
          const handler = handlers[fileType]
          if (handler) {
            handler.handler(filePath)
          }
        }
      })
    })
  })
}

// 复制jssdk
function copyJSSDK() {
  const jssdkPath = path.join(__dirname, 'jssdk.js')
  const targetPath = path.join(webviewRoot, 'jssdk.js')
  if (!fs.existsSync(targetPath)) {
    fs.copyFile(jssdkPath, targetPath, (err) => {
      if (err) {
        console.error('无法复制jssdk:', err)
        return
      }
      console.log('jssdk复制成功:', targetPath)
      insertJSSDK()
    })
  }
}

// 在 index.html 中引入 jssdk.js
function insertJSSDK() {
  const indexPath = path.join(webviewRoot, 'index.html')
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      console.error('无法读取index.html:', err)
      return
    }

    const jssdkScript = `<script src="./jssdk.js"></script>`
    data = data.replace('</head>', `${jssdkScript}</head>`)

    fs.writeFile(indexPath, data, 'utf8', (err) => {
      if (err) {
        console.error('无法写入index.html:', err)
        return
      }
      console.log(`已更新: ${indexPath}`)
    })
  })
}

handleDir(assetsPath)
// copyJSSDK()

import { GlobalConfig } from '@ray-js/types';

// 导出 tuya 平台特定配置，包含主题配置
export const tuya = {
  themeLocation: 'theme.json',
  window: {
    backgroundColor: '@bgColor',
    backgroundTextStyle: '@bgTxtStyle',
    backgroundColorTop: '@bgColorTop',
    backgroundColorBottom: '@bgColorBottom',
    navigationBarTitleText: '涂鸦小程序示例',
    navigationBarBackgroundColor: '@navBgColor',
    navigationBarTextStyle: '@navTxtStyle',
  },
};

const globalConfig: GlobalConfig = { 
  basename: '',
};

export default globalConfig;

/**
 * 抽象首页页面配置, 适用于 NavPanel 导航面板
 */

export const COMPONENTS = [
	{
		title: "基础组件",
		list: [
			{ name: "View", path: "/view" },
			{ name: "Image", path: "/image" },
			{ name: "Text", path: "/text" },
			{ name: "Icon", path: "/icon" },
		],
	},
	{
		title: "视图容器",
		list: [
			{ name: "Swiper", path: "/swiper" },
			{ name: "ScrollView", path: "/scroll-view" },
			{ name: "PageContainer", path: "/page-container" },
		],
	},
	{
		title: "表单组件",
		list: [
			{ name: "Input", path: "/input" },
			{ name: "Button", path: "/button" },
			{ name: "Textarea", path: "/textarea" },
			{ name: "Checkbox", path: "/checkbox" },
			{ name: "Radio", path: "/radio" },
			{ name: "Switch", path: "/switch" },
			{ name: "Picker", path: "/picker" },
			{ name: "PickerView", path: "/picker-view" },
			{ name: "Slider", path: "/slider" },
		],
	},
	{
		title: "动画库",
		list: [{ name: "React-Motion", path: "/react-motion" }],
	},
];

// 用于路由配置的routes
export const BASIC_ROUTES = COMPONENTS.reduce((acc, comps) => {
	return acc.concat(comps.list);
}, []).map((r) => {
	return { 
		route: r.path,
		path: "/basic" + r.path + "/index"
	};
});

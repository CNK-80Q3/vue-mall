module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 667, // 视窗的高度
      unitPrecision: 5, // 指定‘px‘转换为视窗单位值得最小值
      viewportUnit: "vw", // 指定需要转换成的视窗单位，建议vw
      selectorBlackList: ["ignore,", "tab-bar", "tab-bar-item"], // 指定不需要转换的页面
      minPixelValue: 1, // 小于或等于1px不转换为视窗单位
      mediaQuery: false, // 允许媒体查寻中转换成’px‘
      exclude: [/tabbar/]
    }
  }
};

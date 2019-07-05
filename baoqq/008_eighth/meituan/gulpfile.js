
// 本操作vw
var { gulp, src, dest, watch, series } = require('gulp');//所有的依赖都需要 引入 到gulpfile.js中
var sass = require('gulp-sass');
sass.compiler = require('node-sass');	//compiler编译器  const 常量
var browserSync = require('browser-sync').create();//浏览器同步插件
var postcss = require('gulp-postcss');//vw插件
var pxtoviewport = require('postcss-px-to-viewport');
//sass转css
function sassout(){   //  ./是根目录的意思
	return src('./sass/*.scss')//这里是换行,链式操作,每一个.pice是一个任务   
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(dest('./css'))
		//监听到谁-任务-输出到哪
}
//px转vw
function fnpx2vw(){
	return src('./css/*.css')
		.pipe(postcss(option))
		.pipe(dest('./style'))
}
var option = [
	pxtoviewport({
		unitToConvert: 'px',//希望把什么单位转换
		viewportWidth: 640,//设计稿尺寸
		unitPrecision: 5,//小数点后几位
		propList: ['*'],//可以把什么属性转换 如果全部转需要写['*']
		viewportUnit: 'vw',//希望转成什么单位
		fontViewportUnit: 'vw',//字体转成什么单位
		selectorBlackList: [],//黑名单 不希望转换的选择器
		minPixelValue: 6, //最小多少
		mediaQuery: false,
		replace: true
	//   exclude: [],
	//   landscape: false,
	//   landscapeUnit: 'vw',
	//   landscapeWidth: 568
	})
];
// exports.cmd中的名称 = 要执行的任务（函数）  exports
//监听
function w(){
	// watch('路径', 要做的事儿)
	watch('./sass/*.scss',series(sassout,fnpx2vw));
	watch("*.html").on("change", browserSync.reload);
	watch("./css/*.css").on("change", browserSync.reload);
	browserReload();
}
function browserReload() {  //浏览器同步插件的函数
	browserSync.init({
			server: {
					baseDir: "./"
			}
	});
}
exports.abc = w;
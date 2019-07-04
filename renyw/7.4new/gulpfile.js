var gulp = require('gulp');
const px2rem = require('gulp-px2rem');

//配置
var op = {
  rootValue: 72, // 根字体大小 （设计稿/10）
  unitPrecision: 3, //小数点后保留多少位
  propertyBlackList: [], //黑名单-不能转换的
  propertyWhiteList: [], //白名单-可以转换
  replace: true, //是否替换原来的属性 true/false
  // mediaQuery: false, 
  minPx: 1 //小于多少不转换
}
function pxtorem(d){
	return gulp.src('./style/*.css')
    .pipe(px2rem(op))
    .pipe(gulp.dest('./css'))
    d()
}
function watch(){
	gulp.watch('./style/*.css', pxtorem);
}
gulp.task('px', watch)
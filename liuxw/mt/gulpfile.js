var gulp = require('gulp');
var px2rem = require('gulp-px2rem');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

//rem配置项
var px2remOption = {
  rootValue: 75,//根字体大小 元素尺寸 / (效果图的尺寸/10)
  unitPrecision: 3,//保留小数点后几位
  propertyBlackList: [],//黑名单，不需要编译的属性
  propertyWhiteList: [],//白名单，需要编译的
  replace: true,//是否替换原属性  默认为 false,  true替换
  minPx: 10 // 最小单位，小于这个单位的时候，不转换
}

//sass编译成css
function sassout() {
  return gulp.src('./sass/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('./style'));
}
//px转rem
function pxtorem() {
  return gulp.src('./style/*.css')
    .pipe(px2rem(px2remOption))
    .pipe(gulp.dest('./css'));
}
//当sass文件被保存时候，编译成css。再编译成rem，再触发浏览器自动刷新
function watch() {
  // gulp.watch('./sass/*.scss', gulp.series(sassout, gulp.series(pxtorem)));
  gulp.watch('./sass/*.scss').on("change", gulp.series(sassout, gulp.series(pxtorem)));

  gulp.watch("./css/*.css");
  gulp.watch("*.html");
}


gulp.task('abs', watch);



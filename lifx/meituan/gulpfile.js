var gulp = require('gulp');
const px2rem = require('gulp-px2rem');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

//配置
var op = {
  rootValue: 62,
  unitPrecision: 5,
  propertyBlackList: [],
  propertyWhiteList: [],
  replace: true,
  // mediaQuery: false,
  minPx: 1
};
//sass
function sassout() {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style'));
}

//px转rem
function pxtorem(){
	return gulp.src('./style/*.css')
    .pipe(px2rem(op))
    .pipe(gulp.dest('./css'));
}
//服务器
function bs() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}
//监听
function watch(){
	gulp.watch('./sass/*.scss', gulp.series(sassout, gulp.series(pxtorem)));
	gulp.watch('./css/*.css').on('change', browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);
	gulp.watch('js/*.js').on('change', browserSync.reload);
	bs();
}

gulp.task('px', watch);

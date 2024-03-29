var gulp = require('gulp');
const px2rem = require('gulp-px2rem');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

var op = {
    rootValue: 75,
    unitPrecision: 5,
    propertyBlackList: [],
    propertyWhiteList: [],
    replace: true,
    // mediaQuery: false,
    minPx: 1
}
//sass
function sassout () {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style'));
}
//px 转 rem
function pxrem (d) {
    return gulp.src('./style/*.css')
        .pipe(px2rem(op))
        .pipe(gulp.dest('./css'));

    d();
}
//刷新
function bs () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

//css改变了 刷新浏览器
//监听
function watch () {
    //看看你是不是保存了，保存就编译
    gulp.watch('./sass/*.scss', gulp.series(sassout, gulp.series(pxrem)));
    //如果编译完成了 再让浏览器重载
    gulp.watch('./css/*.css').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
    gulp.watch('*.html').on('change', browserSync.reload);
    //开启服务器
    bs();
}


gulp.task('px', watch);




var gulp = require('gulp');
const px2rem = require('gulp-px2rem');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
function sb() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	})
}
var op = {
rootValue: 75,
unitPrecision: 5,
propertyBlackList: [],
propertyWhiteList: [],
replace: true,
minPx: 1
}
function pxtorem(a){
	return gulp.src('./style/*.css')
    .pipe(px2rem(op))
    .pipe(gulp.dest('./css'));
    a()
}
function watch() {
	gulp.watch('./style/*.css', pxtorem);
	gulp.watch('./css/*.css').on('change', browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);
	sb()
}
gulp.task('ds', watch)
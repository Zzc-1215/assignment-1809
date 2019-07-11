var gulp=require('gulp')
const px2rem=require('gulp-px2rem')
var browserSync=require('browser-sync').create()
var reload=browserSync.reload



function a(d){
	return gulp.src('./style/*.css')
	.pipe(px2rem(open))
	.pipe(gulp.dest('./css'))
	
	d();
}

var open = {
  rootValue: 75, 
  unitPrecision: 5,
  propertyBlackList: [],
  propertyWhiteList: [], 
  replace: true,
  // mediaQuery: false, 
  minPx: 1
}
//刷新
function brow(){
	browserSync.init({
		server:{
			baseDir:"./"
		}
	});
}
//css改变 自动刷新
//监听
function watch(){
	gulp.watch('./style/*.css',a)
	gulp.watch('./css/*.css').on('change',browserSync.reload)
	gulp.watch('*.html').on('change',browserSync.reload)
	brow()
}


gulp.task('px',watch)





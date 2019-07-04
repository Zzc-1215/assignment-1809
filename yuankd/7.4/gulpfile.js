var gulp=require('gulp')
var browserSync=require('browser-sync').create()
var reload=browserSync.reload
var postcss = require('gulp-postcss')
var pxtoviewport = require('postcss-px-to-viewport')

function px2vw(){
	return gulp.src(['./style/*.css'])
		.pipe(postcss(processors))
		.pipe(gulp.dest('./css'))
}
var processors = [
 	pxtoviewport({
 		unitToConvert: 'px',
		viewportWidth: 620,
		unitPrecision: 5,
		propList: ['*'],
		viewportUnit: 'vw',
		fontViewportUnit: 'vw',
		selectorBlackList: [],
		minPixelValue: 1,
		// mediaQuery: false,
		replace: true
 	})
];

//刷新
function brow() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
}

//监听
function watch(){
	gulp.watch('./style/*.css',px2vw)
	gulp.watch('./css/*.css').on('change',browserSync.reload)
	gulp.watch('*.html').on('change',browserSync.reload)
	brow()
}


gulp.task('vw',watch)
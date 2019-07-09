var gulp = require('gulp');
var postcss = require('gulp-postcss');
var pxtoviewport = require('postcss-px-to-viewport');

var processors = [
      pxtoviewport({
          unitToConvert: 'px',//转换成什么单位
          viewportWidth: 750,//视觉稿宽度
          unitPrecision: 5,//小数点保留几位
          propList: ['*'],//转换的属性列表
          viewportUnit: 'vw', //希望转成vw|vh|vmin|vmax
          fontViewportUnit: 'vw',//font希望转换成什么
          selectorBlackList: [],//希望哪个选择器不转换
          minPixelValue: 1,//小于多少不转换
          // mediaQuery: false,
          replace: true,
      })
]

  function pxtovw(){
    return gulp.src(['./style/*.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css'));
}
//监听
function watch(){
  gulp.watch('./style/*.css',pxtovw)
}

gulp.task('vw',watch);
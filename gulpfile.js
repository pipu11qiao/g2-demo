// 将项目中个模块的js和css合并到一起
var gulp = require('gulp');
var gulpLoadPlugin = require('gulp-load-plugins'); // 引入gulp插件的方法
var $ = gulpLoadPlugin();

//--------------------------------------- dev --------------------------------

gulp.task('server', ['watchJs'], function () {
  $.connect.server({
    root: './',
    port: 8080,
    livereload: true
  });
});
// 监视文件改变启动热更新
gulp.task('watch', function () {
  gulp.watch([
    'dev/html/*.html',
  ], ['reload'])
});

// 本地热加载
gulp.task('reload', function () {
  gulp.src('dev/html/*.html')
    .pipe($.connect.reload());
});
gulp.task('dev', ['server', 'watch']);



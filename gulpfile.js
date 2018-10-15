// 将项目中个模块的js和css合并到一起
var gulp = require('gulp');
var connect = require('gulp-connect'); // gulp-connect
var open = require('open');
var colors = require('colors');


//--------------------------------------- dev --------------------------------
gulp.task('server', function () {
    connect.server({
        root: './',
        port: 8080,
        livereload: true
    });
    setTimeout(function () {
        console.log(colors.green('http:127.0.0.1:8080/dev/html/index.html'));
        open('http:127.0.0.1:8080/dev/html/index.html');
    },200);
});

// 监视文件改变启动热更新
gulp.task('watchAll', function () {
    gulp.watch([
        'dev/html/**/*.html',
    ], ['reload'])
});

// 本地热加载
gulp.task('reload', function () {
    gulp.src('dev/html/*.html')
        .pipe(connect.reload());
});
gulp.task('dev', ['server', 'watchAll']);


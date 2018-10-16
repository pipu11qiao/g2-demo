// module
var gulp = require('gulp');
var connect = require('gulp-connect'); // gulp-connect
var open = require('open');
var colors = require('colors');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

//
var pathCommon = './dev/common/';

//--------------------------------------- dev --------------------------------
gulp.task('server', ['watchSass'], function () {
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

gulp.task('compileSass', function () {
    return gulp.src(pathCommon + 'scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(pathCommon  + 'css'));
});
gulp.task('watchSass', ['compileSass'], function () {
    gulp.watch(pathCommon + '/**/*.scss', ['compileSass']);
});

// 监视文件改变启动热更新
gulp.task('watchAll', function () {
    gulp.watch([
        'dev/html/**/*.html',
        pathCommon + '**/*.css',
        pathCommon + '**/*.js'
    ], ['reload'])
});

// 本地热加载
gulp.task('reload', function () {
    gulp.src('dev/html/*.html')
        .pipe(connect.reload());
});
gulp.task('dev', ['server','watchAll']);


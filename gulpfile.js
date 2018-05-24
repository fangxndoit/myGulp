var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('serve', ['sass', 'css', 'babel-js','js'], function () {
    connect.server({
        port: 8888,
        livereload: true
    });
});

gulp.task('concat',function () {
    //F:\javascript\es6-gulp-babel\bower_components\jquery\dist\jquery.js
    gulp.src([''])
        .pipe(concat())
        .pipe(uglify())
        .pipe(gulp.dest(dist/minijs));
})

gulp.task('livereoad',function () {
    gulp.src('*.html')
        .pipe(connect.reload());
    gulp.src('dist/css/**/*.css')
        .pipe(connect.reload());
    gulp.src('dist/js/**/*.js')
        .pipe(connect.reload());

})

gulp.task('watch', function () {
    gulp.watch(['*.html', 'dist/css/**/*.css', 'dist/js/**/*.js'], ['livereoad'])
    gulp.watch('js/**/*.js', ['babel-js']);
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('dist/css/*.css',['css']);
})


gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        
})

gulp.task('css', function () {
    gulp.src('dist/css/*.css')
        //.pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
})

gulp.task('babel-js', function () {
    return gulp.src('js/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('js', function () {
    gulp.src(['dist/js/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/minijs/'));
})
gulp.task('default', ['serve','watch']);

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');


gulp.task('mozjpeg', () =>
    gulp.src('src/*.jpg')
        .pipe(imagemin([imageminMozjpeg({
            quality: 75
        })]))
        .pipe(gulp.dest('dist'))
);
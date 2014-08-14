var gulpFilter = require('gulp-filter');
var gulp       = require('gulp');
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');

gulp.task('build', function(){
    gulp.src('*')
        .pipe(gulpFilter('redactor-counter.js'))
        .pipe(uglify())
        .pipe(rename('redactor-counter.min.js'))
        .pipe(gulp.dest('./'));
});
var gulpFilter = require('gulp-filter');
var gulp       = require('gulp');
var uglify     = require('gulp-uglify');

gulp.task('build', function(){
    gulp.src('*')
        .pipe(gulpFilter('redactor-counter.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});
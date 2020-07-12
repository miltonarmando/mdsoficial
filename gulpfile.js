var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('default', function(done) {
  done();
});

gulp.task('watch', function () {
  gulp.watch('sass/*.sass', ['sass']);
});
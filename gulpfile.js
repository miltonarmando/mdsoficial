var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var saneWatch = require('gulp-sane-watch')

 
gulp.task('sass', function () {
  return gulp.src('sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', () => {
    saneWatch('css/**/*.css', {
        events: ['onChange', 'onAdd']
    }, () => {
        gulp.task('watch');
    });
});

gulp.task('default', function(done){ 
done();
});
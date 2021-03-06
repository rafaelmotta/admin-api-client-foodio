var gulp   = require('gulp');
var babel  = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

var sources = ["./src/bootstrap.js", "./src/**/*.js"];

gulp.task('babel', function () {
  gulp.src(sources)
    .pipe(babel())
    .pipe(jshint())
    .pipe(concat('api-admin.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  return gulp.watch(sources, ['babel']);
});

gulp.task('default', ['babel', 'watch']);

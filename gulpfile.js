var gulp = require('gulp'),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  browserSync = require('browser-sync').create(),
  pug = require("gulp-pug"),
  plumber = require("gulp-plumber"),
  watch = require("gulp-watch"),
  ghPages = require('gulp-gh-pages');

gulp.task('styles', function compileSass(){
  gulp.src('./app/sass/main.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('pug', function buildHTML() {
  return gulp.src('./app/pug/index.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('copy-assets', function copyHtml() {
    return gulp.src('./app/assets/**/*') 
      .pipe(plumber())
      .pipe(gulp.dest('./dist'))
});

gulp.task('build-js', function(){
  return gulp.src('./app/js/*.js')
    .pipe(watch('./app/js/*.js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch('./app/sass/*.sass', ['styles']);
  gulp.watch('./app/pug/*.pug', ['pug']);
  gulp.watch('./app/js/*.js', ['build-js']);
  gulp.watch('./app/*.html').on('change', browserSync.reload);
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({'branch':'master'}));
});

gulp.task('default', ['styles', 'pug', 'copy-assets', 'build-js', 'serve']);

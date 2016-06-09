var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    minifycss = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    neat = require('node-neat'),
    browserSync = require('browser-sync'),
    pug = require("gulp-pug"),
    ghPages = require('gulp-gh-pages'),
    del = require('del'),
    reload = browserSync.reload;

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['dist']);
});

gulp.task('pug', function buildHTML() {
  return gulp.src('./app/pug/*.pug')
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

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({'branch':'master'}));
});

gulp.task('js', function() {
	return gulp.src(['./app/js/*.js'], ['!./app/js/concat.js'])
	.pipe(concat('concat.js'))
	.pipe(gulp.dest('./app/js'))
});

gulp.task('sass', function () {  
	gulp.src('./app/sass/*.sass')
	.pipe(plumber())
	.pipe(sass())
//	.pipe(gulp.dest('./build/sass/tmp'))
//	.pipe(rename({suffix: '.min'}))
//	.pipe(minifycss())
	.pipe(gulp.dest('./dist/css'))
});

gulp.task('serve', ['build'], function() {
  console.log("entering serve")
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch('./app/sass/**/*.sass', ['sass']);
  gulp.watch('./app/pug/**/*.pug', ['pug']);
  gulp.watch('./app/js/**/*.js', ['js']);
  gulp.watch('./app/assets/**/*', ['copy-assets']);
  gulp.watch('./dist/**/*', function(event) {
    browserSync.reload();
  });
});

gulp.task('build', ['js', 'sass', 'pug', 'copy-assets'], function (cb) {
  cb();
});

gulp.task('default', ['build', 'serve']);

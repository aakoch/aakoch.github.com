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
    watch = require("gulp-watch"),
    ghPages = require('gulp-gh-pages'),
    reload = browserSync.reload;

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

gulp.task('build-js', function(){
  return gulp.src('./app/js/*.js')
    .pipe(watch('./app/js/*.js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass', function () {  
	gulp.src('./app/sass/*.sass')
	.pipe(plumber())
	.pipe(sass({
		includePaths: ['scss'].concat(neat)
	}))
	.pipe(gulp.dest('./build/sass//tmp'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('./app/css'))
});

gulp.task('reload', function () {
	browserSync.reload();
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./app"
		}
	});
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
  gulp.watch('./app/assets/**/*', ['copy-assets']);
  gulp.watch('./app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['js', 'sass', 'pug', 'copy-assets', 'build-js', 'serve']);

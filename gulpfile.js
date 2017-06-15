var gulp = require('gulp'),
    fs = require('fs'),
    sass = require('gulp-ruby-sass'),
    notify = require('gulp-notify'),
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    cleanCss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    header = require('gulp-header'),
    del = require('del'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename');

function read(f) {
  return fs.readFileSync(f).toString();
}

function include(f) {
  eval.apply(global, [read(f)]);
}

include('./gulpconfig.js');

/* File processing tasks */

gulp.task('sass', ['sass-clean'],  () => 
   sass(path.sass + 'main.scss', {
      style: 'compressed',
      loadPath: sassFiles
   })
   .pipe(concat('main.css'))
   .pipe(rename({
      suffix: ".min",
      extname: ".css"
   }))
   .on('error', sass.logError) 
   .pipe(gulp.dest(path.resourcesCss))
);

gulp.task('fonts', function(){
   gulp.src(fontFiles)
      .pipe(gulp.dest(path.font));
});

gulp.task('styles', ['sass'], function(){
   gulp.src(styleFiles)
      .pipe(sourcemaps.init())
      .pipe(concat('main.css'))
      .pipe(header("/* Generated via gulp / Don't edit by hand! / Use resources for development! */\n"))
      .pipe(cleanCss({debug: true}, function(details) {
         console.log(details.name + ' : ' + details.stats.originalSize);
         console.log(details.name + ' : ' + details.stats.minifiedSize);
      }))
      .pipe(rename({
           suffix: ".min",
           extname: ".css"
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(path.css));
});

gulp.task('scripts', function(){
   gulp.src(scriptFiles)
      .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(header("/* Generated via gulp / Don't edit by hand! / Use resources for development! */\n"))
      .pipe(rename({
         suffix: ".min",
         extname: ".js"
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(path.script)); 
});

gulp.task('watch', function () {
   gulp.watch(path.sass + '**/*',  ['styles']);
});

gulp.task('images', function() {
  return gulp.src(imageFiles)
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(path.images));
});

gulp.task('sass-clean', function(){
   del([path.css + '**.*', path.resourcesCss + 'main.css']).then(paths => {
      console.log('Deleted files:\n', paths.join('\n'));
   });
   
   cache.clearAll();
});

gulp.task('deep-clean', ['saas-clean'], function(){
   del([path.font + '**.*', path.script + '**.*', path.images + '**/*']).then(paths => {
      console.log('Deleted files:\n', paths.join('\n'));
   });
   
   cache.clearAll();
});

gulp.task('default',['fonts', 'sass', 'scripts', 'styles', 'images'], function() {
   return gulp.src(assetsPath)
      .pipe(notify({ message: 'Relaxer is now completed buddy <3' }));
});

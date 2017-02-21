const gulp = require('gulp'),		
      connect = require('gulp-connect'),		
      historyApiFallback = require('connect-history-api-fallback'),
      jshint = require('gulp-jshint'),
      stylish = require('jshint-stylish'),
      sourcemaps = require('gulp-sourcemaps'),
      sass = require('gulp-sass'),
      cachebust = require('gulp-cachebust')(),
      plumber = require('gulp-plumber'),
      size = require('gulp-size'),
      prefix = require('gulp-autoprefixer'),
      rename = require('gulp-rename'),
      browserSync = require('browser-sync'),
      reload = browserSync.reload,
      cleanCSS = require('gulp-clean-css');

let sassOptions = {
  outputStyle: 'expanded'
};

let prefixerOptions = {
  browsers: ['last 2 versions']
};

let bases = {
    app:  './app/',
    dist: './server/public/',
};

let onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Basso"
  })(err);
  this.emit('end');
};

//Busca errores en el js y nos lo muestra por pantalla		
gulp.task('jshint', () =>{		
  return gulp.src('./app/scripts/**/*.js')		
    .pipe(jshint('.jshintrc'))		
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));		
})				

//Pre-procesa los archivos sass
// gulp.task('build-css', () =>{  
//     return gulp.src('./app/**/*.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass({ outputStyle: 'compressed' }))
//         .pipe(cachebust.resources())
//         .pipe(sourcemaps.write('./maps'))
//         .pipe(gulp.dest('./server/public/stylesheets/'))
//         .pipe(connect.reload());
// });

gulp.task('build-css', function() {
  return gulp.src(bases.app + '**/*.scss')
    .pipe(plumber({errorHandler: onError}))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix(prefixerOptions))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest(bases.dist + 'css'))
    .pipe(reload({stream:true}))
    .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(bases.dist + 'css'))
});

// Recarga el navegador cuando hay cambios en el HTML		
 gulp.task('html', () =>{		
   gulp.src('./app/**/*.html')		
     .pipe(connect.reload())		
 });

// Vigila cambios que se produzcan en el codigo		
// y lanza las tareas relacionadas		
 gulp.task('watch', () =>{		
   gulp.watch(['./app/**/*.html'], ['html']);		
   gulp.watch(['./app/**/*.scss'], ['build-css']);		
   gulp.watch(['./app/**/*.js', './Gulpfile.js'], ['jshint']);		
 })

gulp.task('default', ['watch', 'jshint', 'build-css']);
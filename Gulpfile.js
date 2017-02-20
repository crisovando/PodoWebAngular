const gulp = require('gulp'),
      connect = require('gulp-connect'),
      historyApiFallback = require('connect-history-api-fallback'),
      stylus = require('gulp-stylus'),
      nib = require('nib'),
      jshint = require('gulp-jshint'),
      stylish = require('jshint-stylish');

//Servidor web de desarrollo
gulp.task('server', () =>{
  connect.server({
    root: './app',
    hostname: '0.0.0.0',
    port: 8080,
    livereload: true,
    middleware: (connect, opt) =>{
      return [historyApiFallback({})] ;
    }
  });
})

//Busca errores en el js y nos lo muestra por pantalla
gulp.task('jshint', () =>{
  return gulp.src('./app/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
})

//Pre-procesa archivos stylus a CSS y recarga los cambios
gulp.task('css', () =>{
  gulp.src('./app/stylesheets/main.styl')
    .pipe(stylus({ use: nib() }))
    .pipe(gulp.dest('./app/stylesheets'))
    .pipe(connect.reload());
});

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', () =>{
  gulp.src('./app/**/*.html')
    .pipe(connect.reload())
});

//Vigila cambios que se produzcan en el codigo
//y lanza las tareas relacionadas
gulp.task('watch', () =>{
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/stylesheets/**/*.styl'], ['css']);
  gulp.watch(['./app/scripts/**/*.js', './Gulpfile.js'], ['jshint']);
})

gulp.task('default', ['server', 'watch']);

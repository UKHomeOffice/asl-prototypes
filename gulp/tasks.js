/*
  tasks.js
  ===========
  defaults wraps generate-assets, watch and server
*/

const gulp = require('gulp')
const mocha = require('gulp-mocha')
require('./clean');
require('./copy-assets');
require('./nodemon');
require('./sass');
require('./watch');

gulp.task('mocha', function () {
  return gulp.src(['test/**/*.js'], { read: false })
    .pipe(mocha({ reporter: 'spec', exit: true }))
    .on('error', console.error)
})

gulp.task('generate-assets', gulp.series(
  'clean',
  'sass',
  'copy-assets',
  'sass-documentation',
  'copy-assets-documentation',
  'sass-v6',
  'copy-assets-v6'
))

gulp.task('watch', gulp.series(
  'watch-sass',
  'watch-assets',
  'watch-sass-v6',
  'watch-assets-v6'
))

gulp.task('test', gulp.series(
  'generate-assets',
  'mocha'
))

gulp.task('default', gulp.series(
  'generate-assets',
  gulp.parallel(
    'watch',
    'server'
  )
))

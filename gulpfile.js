var gulp = require('./lib/gulp')([
  'init'
  ]);


gulp.task('default', ['init']);
//
// // Seeds database
// gulp.task('db:seed', ['import_travels']);

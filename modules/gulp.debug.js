(function() {
  'use strict';

  //# Load external modules
  var gulp = require('gulp');
  var jshint = require('gulp-jshint');
  var jscs = require('gulp-jscs');
  var $ = require('../gulpfile.tree');

  var checkFilesArray = $.source.app.javascript.config.concat([$.source.app.javascript.all]);

  //## DEVELOPMENT: Search for some Best Practices errors in JS files and show them
  gulp.task('debug:best.practices', function() {
    return gulp.src(checkFilesArray)
      .pipe(jshint('./.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
  });

  //## DEVELOPMENT: Search for some Code Style errors in JS files and show them
  gulp.task('debug:code.style', function() {
    return gulp.src(checkFilesArray)
      .pipe(jscs())
      .pipe(jscs.reporter())
      .pipe(jscs.reporter('fail'));
  });

  //## DEVELOPMENT: Join all debugging tasks
  gulp.task('debug', ['debug:best.practices', 'debug:code.style']);
})();

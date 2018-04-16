(function() {
  'use strict';

  //# Load external modules
  var gulp = require('gulp');
  var fs = require('fs-extra');
  var htmlMin = require('gulp-htmlmin');
  var $ = require('./gulpfile.tree');

  //# Compose absolute url to module:
  var urlToMainModule = require.resolve('./').split('index.js').join('');

  fs.readdirSync(urlToMainModule + 'modules').map(function(file) {
    require(urlToMainModule + 'modules/' + file);
  });

  //# SUB-TASKS ####################

  //## LIFE: Compose all building tasks
  gulp.task('build', gulp.parallel('build.app', 'build.styles', 'build.images'));
  //## DEVELOPMENT: Compose all building tasks without concat and obfuscation
  gulp.task('build:dev', gulp.parallel('build.app:dev', 'build.styles:dev', 'build.images:dev'));
  //## DEVELOPMENT: Compose all building tasks without obfuscation but concat
  gulp.task('build:dev:concat', gulp.parallel(
    'build.app:dev:concat',
    'build.styles:dev:concat',
    'build.images:dev:concat'
  ));

  //# MIN INDEX.HTML  ####################

  //## LIFE: Reduce minimum index.html file
  gulp.task('index.min', gulp.parallel('inject'), function() {
    return gulp.src($.paths.dist.index)
      .pipe(htmlMin({
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        useShortDoctype: true
      }))
      .pipe(gulp.dest($.paths.dist.root));
  });

  //# DEVELOP TASKS ################################################################
  gulp.task('dist', gulp.series('clean', 'server'));
  gulp.task('dev', gulp.series('clean:dev', 'debug:watch', 'server:dev', 'watch:dev'));
  gulp.task('dev:concat', gulp.series('clean:dev:concat', 'debug:watch', 'server:dev:concat', 'watch:dev:concat'));

  //# DEPLOY TASKS #################################################################
  gulp.task('deploy:dist', gulp.series('clean', 'index.min'));
  gulp.task('deploy:dev', gulp.series('clean:dev', 'debug:compile', 'inject:dev'));
  gulp.task('deploy:dev:concat', gulp.series('clean:dev:concat', 'debug:compile', 'inject:dev:concat'));

  //# DEFAULT TASK #################################################################
  gulp.task('default', gulp.parallel('dev'));
})();

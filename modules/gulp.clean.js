(function() {
  'use strict';

  //# Load external modules
  var gulp = require('gulp');
  var fs = require('fs-extra');
  var $ = require('../gulpfile.tree');

  //## LIFE: Removes production directory
  gulp.task('clean', function() {
    try {
      fs.removeSync($.paths.dist.root);
      console.log('Production directory cleaned...');
    } catch (error) {
      console.error(error);
    }
  });
  //## DEVELOPMENT: Removes development directory
  gulp.task('clean:dev', function() {
    try {
      fs.removeSync($.paths.dev.root);
      console.log('Development directory cleaned...');
    } catch (error) {
      console.error(error);
    }
  });
  //## DEVELOPMENT: Removes development concat directory
  gulp.task('clean:dev:concat', function() {
    try {
      fs.removeSync($.paths.devConcat.root);
      console.log('Development concat directory cleaned...');
    } catch (error) {
      console.error(error);
    }
  });

  //## DEVELOPMENT: Remove development directories for watch tasks
  gulp.task('clean.js.app:dev', function() {
    try {
      fs.removeSync($.source.deploy.dev.jsApp);
      console.log('Development App JS directory cleaned...');
    } catch (error) {
      console.error(error);
    }
  });
  gulp.task('clean.css.app:dev', function() {
    try {
      fs.removeSync($.source.deploy.dev.cssApp);
      console.log('Development App CSS directory cleaned...');
    } catch (error) {
      console.error(error);
    }
  });
  gulp.task('clean.all.vendor:dev', function() {
    try {
      fs.removeSync($.source.deploy.dev.jsVendor);
      fs.removeSync($.source.deploy.dev.cssVendor);
      console.log('Development Vendor JS and CSS directories cleaned...');
    } catch (error) {
      console.error(error);
    }
  });
  gulp.task('clean.json.app:dev', function() {
    try {
      fs.removeSync($.paths.dev.jsonApp);
      console.log('Development JSON directory cleaned...');
    } catch (error) {
      console.error(error);
    }
  });
  gulp.task('clean.images.app:dev', function() {
    try {
      fs.removeSync($.paths.dev.imagesApp);
      console.log('Development IMAGES directory cleaned...');
    } catch (error) {
      console.error(error);
    }
  });

  //## DEVELOPMENT: Remove development directories for watch tasks without obfuscation but concat
  gulp.task('clean.js.app:dev:concat', function() {
    try {
      fs.removeSync($.source.deploy.devConcat.jsAppFile + '*');
      console.log('Development App JS files cleaned...');
    } catch (error) {
      console.error(error);
    }
  });
  gulp.task('clean.css.app:dev:concat', function() {
    try {
      fs.removeSync($.source.deploy.devConcat.cssAppFile + '*');
      console.log('Development App CSS files cleaned...');
    } catch (error) {
      console.error(error);
    }
  });
  gulp.task('clean.all.vendor:dev:concat', function() {
    try {
      fs.removeSync($.source.deploy.devConcat.jsVendorFile + '*');
      fs.removeSync($.source.deploy.devConcat.cssVendorFile + '*');
      console.log('Development Vendor JS and CSS files cleaned...');
    } catch (error) {
      console.error(error);
    }
  });
  gulp.task('clean.json.app:dev:concat', function() {
    try {
      fs.removeSync($.paths.devConcat.jsonApp);
      console.log('Development JSON directory cleaned...');
    } catch (error) {
      console.error(error);
    }
  });
  gulp.task('clean.images.app:dev:concat', function() {
    try {
      fs.removeSync($.paths.devConcat.imagesApp);
      console.log('Development IMAGES directory cleaned...');
    } catch (error) {
      console.error(error);
    }
  });
})();



'use strict';

var gulp = require('gulp-task-doc');//Gulp and document
var merge = require('merge-stream');//Merge dirs
var size = require('gulp-size');//Size of folders and dirs
var dist = require('./dist_path');

// Copy necesary elements (that cannot be vulcanized) to the distribution folder
gulp.task('copy', function() {
  var app = gulp.src([
    'app/*',
    '!app/{elements,bower_components}'//No copy
  ], {
    dot: true
  }).pipe(gulp.dest(dist()));

  var bower = gulp.src([
     'app/bower_components/{webcomponentsjs,promise-polyfill}/**/*'
   ]).pipe(gulp.dest(dist('bower_components')));

   var img = gulp.src([
      'app/elements/iblancasa-app/images/**'
    ]).pipe(gulp.dest(dist('elements/iblancasa-app/images/')));

    var otherimg = gulp.src([
       'app/images/**/*'
     ]).pipe(gulp.dest(dist('images')));

  return merge(app, bower, img, otherimg)
    .pipe(size({
       title: 'copy'
     }));
 });

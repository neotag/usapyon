const gulp = require('gulp');
const webserver = require('gulp-webserver');

const HTDOCS = "docs/";

gulp.task('server', () => {
  gulp.src(HTDOCS)
    .pipe(webserver({
      port: 8000,
      livereload: true,
      host: '0.0.0.0'
    }));
});

gulp.task('default', [ 'server' ]);


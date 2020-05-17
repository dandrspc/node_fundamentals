const gulp = require('gulp')
const server = require('gulp-server-livereload')

gulp.task('build', function (callback) {
    console.log('Building...');
    setTimeout(callback, 1200);
    callback()
})

gulp.task('serve', callback => {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true,
        }))
})

gulp.task('default', gulp.series('build', 'serve'))
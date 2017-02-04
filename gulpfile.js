var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;


gulp.task('browser-sync', function(){
		browserSync({
			server: {
				baseDir: "./"
			}
		});
	});


gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("./*.html").on('change', reload);
});


gulp.task('default', ['watch']);
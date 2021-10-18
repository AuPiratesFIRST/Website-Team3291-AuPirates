const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

var paths = {
    src: "./library/scss",
    srcFiles: "/**/*.scss",
    dest: "./library/css/"
}

gulp.task('styles', () => {
    return gulp.src(paths.src + paths.srcFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('clean', () => {
    return del([
        paths.dest + "*.css",
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

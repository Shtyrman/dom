const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');


const paths = {
    vendor: './node_modules/',
    src: './styles/',
    dist: './public/css/'
};

gulp.task('sass', () => {
    gulp.src(`${paths.src}index.sass`)
        .pipe(sass({
            includePaths: [paths.vendor]
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie >= 9']
        }))
        .pipe(cssnano())
        .pipe(rename('app.css'))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('watch:sass', () =>
    gulp.watch(paths.src + '**/*.sass', ['sass']));
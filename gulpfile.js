// gulpfile.js
const gulp = require("gulp")
const sass = require('gulp-sass')(require('sass'))
const cleanCSS = require('gulp-clean-css')
const del = require('del');

gulp.task("sass", async function () {
    await del(['dist/css']);
    return gulp.src("lib/scss/**/*.scss")
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist/css"))
})
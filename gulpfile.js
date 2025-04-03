//Initialize modules
const {src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// use dart-sass for @use
//sass.compiler = require('dart-sass');

//JavaSript Task
function jsTask() {
    return src('Website/script.js', { sourcemaps: true})
    .pipe(babel ({presets: [ '@babel/preset-env']}))
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.'}));
}

//Default Gult Task
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

// Build Gulp Task 
exports.build = series(scssTask, jsTask);
const {src, dest, parallel, series, watch} = require('gulp'); // add gulp into project
const browserSync = require('browser-sync').create(); // add liveBrowser
const concat = require('gulp-concat'); // add concat
const uglify = require('gulp-uglify-es').default; //uglify for min
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

// add function for serve
function browsersync(){
    browserSync.init ({
        server: {baseDir: 'src/'}, // path to server file
        notify: false
    })
}

function scripts(){
    return src([
        'src/js/main.js',
        'src/js/loginForm.js'
    ])
        .pipe(concat('main.min.js')) //file
        .pipe(uglify()) // min
        .pipe(dest('src/js')) //path
        .pipe(browserSync.stream())
}

function styles(){
    return src('src/style/scss/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({overrideBrowserslist:['last 10 version'], grid:true}))
        .pipe(cleancss(({level: {1: { specialComments:0 }}})))
        .pipe(dest('src/style'))
        .pipe(browserSync.stream())

}

function images () {
    return src ('src/img/**/*')
        .pipe(newer('src/img/assets'))
        .pipe(imagemin())
        .pipe(dest('src/img/assets/'))
}

function startWatch(){
    watch('src/**/*.scss', styles);
    watch(['src/**/*.js', '!src/**/**.min.js'],scripts);
    watch ('src/**/*.html').on('change', browserSync.reload);
}
exports.browsersync=browsersync;
exports.scripts=scripts;
exports.styles=styles;
exports.images=images;

exports.default = parallel(styles, scripts, browsersync, startWatch)
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify-es').default,
    cleancss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel');

gulp.task('sass', function(){
    return gulp.src( 'static/assets/scss/*.scss' )
        .pipe(sourcemaps.init())
        .pipe( sass() )
        .pipe( cleancss() )
        .pipe(sourcemaps.write(''))
        .pipe( gulp.dest( 'static/dist/css'));
});

gulp.task('frontend-js', function() {
    return gulp.src( 'static/assets/scripts/frontend/*.js' )
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe( concat( 'combined.js'))
        .pipe( uglify())
        .pipe(sourcemaps.write(''))
        .pipe( gulp.dest( 'static/dist/js'));
} );
gulp.task('admin-js', function() {
    return gulp.src( 'static/assets/scripts/admin/*.js' )
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat( 'combined-admin.js' ))
        .pipe( uglify())
        .pipe(sourcemaps.write(''))
        .pipe( gulp.dest( 'static/dist/js' ) );
} );

gulp.task('watch', function() {
    gulp.watch( 'static/assets/scss/**/*.scss',  gulp.series('sass'));
    gulp.watch( 'static/assets/scripts/frontend/**/*.js', gulp.series('frontend-js'));
    gulp.watch( 'static/assets/scripts/admin/*.js', gulp.series('admin-js'));
});
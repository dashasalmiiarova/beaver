var
    gulp = require("gulp"),
    // php = require('gulp-connect-php'),
    mail = require('gulp-mail'),
    gulpCssmin = require('gulp-cssmin'),
    gulpRename = require('gulp-rename'),
    browserSync = require('browser-sync').create();

    gulp.task('mincss', function(){
        return gulp.src('app/css/style.css')
            .pipe(gulpCssmin())
            .pipe(gulpRename({suffix: '.min'}))
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({stream: true}))
    });
    gulp.task('js', function(){
        return gulp.src([
            'node_modules/countup.js/dist/countUp.min.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}))
    });
    gulp.task('html', function(){
        return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
    });
    gulp.task('js', function(){
        return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({stream: true}))
    });



    gulp.task('browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: "app/"
            }
    });
});
    gulp.task('watch', function(){
        gulp.watch('app/css/style.css', gulp.parallel('mincss'))
        gulp.watch('app/*.html', gulp.parallel('html'))
        gulp.watch('app/js/*.js', gulp.parallel('js'))
        // gulp.watch('**/*.php', gulp.parallel('js'))
    });
    gulp.task('default', gulp.parallel('mincss', 'js', 'browser-sync', 'watch'));
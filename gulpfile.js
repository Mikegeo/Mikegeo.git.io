var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');

gulp.task('less', function(){
  return gulp.src('app/less/styless.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
    browser:["iexplore", "chrome"]
  })

})


gulp.task('browserSyncReload', function(){
  browserSync.reload();
})

gulp.task('watch',['browserSync','less'],function(){
    gulp.watch("app/less/styless.less", ['less']);
    gulp.watch("app/css/*.css", ['browserSyncReload']);
    gulp.watch("app/**/*.html", ['browserSyncReload']);
})

gulp.task('move-html', function() {
  return gulp.src('app/**/*.html')
  .pipe(gulp.dest('docs'))
})

gulp.task('minify-css', function() {
    return gulp.src('app/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('docs/css/'));
});

gulp.task('minify-img', function() {
    gulp.src('app/images/*')
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('docs/images'))
});

gulp.task('build',['move-html','minify-css','minify-img'], function() {
    console.log("Build complete")
});

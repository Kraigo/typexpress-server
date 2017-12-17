var gulp = require('gulp');
var ts = require('gulp-typescript');
 
gulp.task('default', function () {
    return gulp.src('./src/**/*.ts')
        .pipe(ts({
            module: "commonjs",
            noImplicitAny: true,
            target: "es6"
        }))
        .pipe(gulp.dest('./dist'));
});
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function scripts(){
    return gulp.src("./src/scripts/*.js")
            .pipe(uglify())
            .pipe(gulp.dest("./dist/js"));
}

function buildStyles() {
    return gulp.src("./src/styles/*.scss")
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(gulp.dest("dist/styles"));
}
function imageMin() {
    return gulp.src("./src/images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"));
}


exports.default = gulp.parallel(buildStyles, imageMin, scripts);

exports.watch = function () {
    gulp.watch("src/styles/*.scss", gulp.parallel(buildStyles));
    gulp.watch("src/scripts/*.js", gulp.parallel(scripts));
}
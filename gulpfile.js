var gulp = require("gulp");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var rename = require("gulp-rename");

gulp.task("sprite", function() {
    return gulp.src("images/**/*.svg")
        .pipe(svgmin())
        .pipe(rename({prefix: "svg-"}))
        .pipe(svgstore({inlineSvg: true}))
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest("public"));
});

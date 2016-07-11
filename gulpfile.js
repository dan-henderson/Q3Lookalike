var gulp = require("gulp")
  , del = require("del")
  , plumber = require("gulp-plumber")
  , webpack = require("webpack-stream");

gulp.task("html", function () {
  return gulp.src(["src/**/*.html"])
    .pipe(gulp.dest("public"));
});

gulp.task("static-assets", ["html"], function () {
  return gulp.src("src/favicon.ico")
    .pipe(gulp.dest("public"));
});

var webpackConfig = require("./webpack.config.js");
gulp.task("webpack", function () {
  return gulp.src("src/scripts/main.tsx")
    .pipe(plumber())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest("public/scripts"));
});

gulp.task("watch", function () {
  gulp.watch(["src/**/*.html"], ["html"]);
  gulp.watch(["src/scripts/**/*.ts", "src/scripts/**/*.tsx"], ["webpack"]);
});

gulp.task("clean", function () {
  return del(["public"]);
});

gulp.task("build", ["static-assets", "webpack"]);

gulp.task("default", ["build", "watch"]);

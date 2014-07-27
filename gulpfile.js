var gulp = require("gulp"),
    path = require("path"),
    connect = require("gulp-connect");

gulp.task("connect", function() {
  connect.server({
    root: path.resolve("./"),
    port: 8001,
    livereload: true
  });
});

gulp.task("html", function() {
  gulp.src("./*.html")
    .pipe(connect.reload());
});
gulp.task("js", function() {
  gulp.src("./*.js")
    .pipe(connect.reload());
});
gulp.task("css", function() {
  gulp.src("./*.css")
    .pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch(["./*.html"], ["html"]);
  gulp.watch(["./js/*.js"], ["js"]);
  gulp.watch(["./css/*.css"], ["css"]);
});

gulp.task("default", ["connect", "watch"]);

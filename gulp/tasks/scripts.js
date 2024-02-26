import uglifyJs from "gulp-uglify";

export const scripts = () => {
  return app.gulp
    .src(app.path.src.scripts, { sourcemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "scripts",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(uglifyJs())
    .pipe(app.gulp.dest(app.path.build.scripts))
    .pipe(app.plugins.browsersync.stream());
};

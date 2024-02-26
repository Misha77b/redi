import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";
import autoPrefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, "../images/"))
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(
      autoPrefixer({
        grid: true,
        overrideBrowserslidt: ["last 3 versions"],
        cascade: true,
      })
    )
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: ".css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};

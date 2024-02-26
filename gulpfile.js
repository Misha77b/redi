import gulp from "gulp";
// path import
import { path } from "./gulp/config/path.js";
// tasks import
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
// plugins
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.scripts, scripts);
  gulp.watch(path.watch.images, images);
}

//  fonts tasks
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//  main tasks
const mainTask = gulp.series(fonts, html, scss, scripts, images);

// gulp task execution scenario
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));
// default task execution
gulp.task("default", dev);

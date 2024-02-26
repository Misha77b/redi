import replace from "gulp-replace"; // search and change
import plumber from "gulp-plumber"; // error handler
import notify from "gulp-notify"; // notification (hints
import browsersync from "browser-sync"; // localhost
import newer from "gulp-newer"; // check updates

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
};

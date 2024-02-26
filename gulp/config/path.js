import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const build = "./dist";
const src = "./src";

export const path = {
  build: {
    images: `${build}/images`,
    scripts: `${build}/js`,
    css: `${build}/css`,
    html: `${build}`,
    fonts: `${build}/fonts`,
    files: `${build}/files/`,
  },
  src: {
    images: `${src}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    scripts: `${src}/scripts/script.js`,
    svg: `${src}/images/**/*.svg`,
    scss: `${src}/styles/styles.scss`,
    html: `${src}/*.html`,
    files: `${src}/files/**/*.*`,
  },
  watch: {
    images: `${src}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    scripts: `${src}/scripts/**/*.js`,
    scss: `${src}/styles/**/*.scss`,
    html: `${src}/**/*.html`,
    files: `${src}/files/**/*.*`,
  },
  clean: build,
  buildFolder: build,
  srcFolder: build,
  rootFolder: build,
};

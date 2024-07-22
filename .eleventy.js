const yaml = require("js-yaml");
const eleventySass = require("eleventy-sass");

const favicons = require("./.favicons");
const directusToData = require("directus-to-data");


module.exports = function (eleventyConfig) {
    favicons({
        input: "src",
        output: "dist",
    });
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));


    directusToData({
        configFilename: ".directus.json",
    })

    eleventyConfig.addFilter("uppercase", (val) => { return val.toUpperCase() });

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPlugin(eleventySass, {
        sass: {
            loadPaths: ["node_modules"]
        }
    });

    return {
        dir: {
            input: "src",
            output: "dist",
        }
    }
}
const yaml = require("js-yaml");
const sass = require("sass");
const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    eleventyConfig.addPassthroughCopy("src/_assets");

    /*
    eleventyConfig.addTemplateFormats("scss")
    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",

        compile: function(inputContent, inputPath) {
            let result = sass.compileString(inputContent);

            this.addDependencies(inputPath, result.loadedUrls);

            return async (data) => {
                return result.css;
            }
        }
    })
    */
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
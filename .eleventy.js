const yaml = require("js-yaml");
const sass = require("sass");

module.exports = function(eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    
    eleventyConfig.addTemplateFormats("scss")
    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",
        compile: async function(input) {
            let result = sass.compileString(input);

            return async (data) => {
                return result.css;
            }
        }
    })
    
    return {
        dir: { 
            input: "src",
            output: "dist",
        }
    }
}
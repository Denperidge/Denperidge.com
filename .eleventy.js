const yaml = require("js-yaml");
const glob = require("glob");


function getProjects() {
    console.log(glob.GlobSync("src/projects/*.md"));
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
    eleventyConfig.addFilter("getProjects", getProjects)
    
    return {
        dir: { 
            input: "src",
            output: "dist",
        }
    }
}
const yaml = require("js-yaml");
const eleventySass = require("eleventy-sass");

const favicons = require("./.favicons");
const md = require("markdown-it")({breaks: true, typographer: true});


module.exports = function (eleventyConfig) {
    favicons({
        input: "src",
        output: "dist",
    });
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    eleventyConfig.addFilter("uppercase", (val) => { return val.toUpperCase() });

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPlugin(eleventySass, {
        sass: {
            loadPaths: ["node_modules"]
        }
    });

    eleventyConfig.addTransform("markdown", function(content) {
        if (!this.page.outputPath.endsWith(".html") || !content) { return content; }

        const headersInHtml = content.match(/(?<=<h)\d(?=>)/g);
        const matches = content.find(/(?<=<section class="markdown-render">)(.|\n)*?(?=<\/section>)/g);

        if (matches === null) {
            return content;
        } else {
            for (let i=0; i < matches.length; i++) {
                const match = matches[i]
                console.log(match)
                const originalMdString = match[0];
                let newMdString;
                // TODO: patchwork solution, doesn't work for other headers
                if (headersInHtml) { 
                    const highestHeaderInHtml = Math.max(...headersInHtml)
                    newMdString = originalMdString.replaceAll("#", "#".repeat(highestHeaderInHtml + 1))
                } else {
                    newMdString = originalMdString;
                }
                console.log(newMdString)
                return content.replace(originalMdString, md.render(newMdString));
            }

            
        }
    });

    return {
        dir: {
            input: "src",
            output: "dist",
        }
    }
}
import pugPlugin from "@11ty/eleventy-plugin-pug";
import yaml from "js-yaml";
import * as sass from "sass";
import eleventySass from "@grimlink/eleventy-plugin-sass";
import eleventyFavicons from "eleventy-favicons";
import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";

export const config = {
    dir: {
        input: "src",
        output: "dist",
    }
}

export default async function (eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    eleventyConfig.addFilter("uppercase", (val) => { return val.toUpperCase() });

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/scripts");

    eleventyConfig.addPlugin(pugPlugin);
    
    eleventyConfig.addPlugin(eleventyFavicons, {
        image: "src/assets/Dendy.jpg",
        favicons: {
            background: "#f4f6a3",
            theme_color: "#f4f6a3",
        }
    })
    eleventyConfig.addPlugin(eleventySass, {
        sass,
        outputPath: "",
        includePaths: ["node_modules"]
    });
    eleventyConfig.addPlugin(eleventyAutoCacheBuster);
    
}
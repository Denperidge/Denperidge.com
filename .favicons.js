const fs = require("fs");
const path = require("path")
const favicons = require("favicons").favicons;

async function write(response, property, outputDir) {
    Promise.all(
        response[property].map(
            async (file) => await fs.writeFile(path.join(outputDir, file.name), file.contents, ()=>{})
        )
    );
}

module.exports = async function(eleventyDir) {
    const response = await favicons("src/assets/Dendy.jpg", {
        background: "#f4f6a3",
        theme_color: "#f4f6a3",
    });
    await fs.writeFile(path.join("src", "_includes", "base", "favicons.pug"), response.html.join(""), ()=>{})
    await write(response, "images", eleventyDir.output);
    await write(response, "files", eleventyDir.output);
}


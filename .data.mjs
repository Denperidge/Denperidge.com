import fs from "fs";
import directusToData from "directus-to-data";


fs.readdirSync("src/2-projects/").forEach((file) => {
    if (file.endsWith(".md")) {
        fs.rmSync("src/2-projects/" + file)
    }
});
directusToData({
    configFilename: ".directus.json",
    outputFilename: "src/_data/projects.json",
    callback: (projects) => {
        projects.forEach((project) => {
            project.layout = "project.pug";
            project.tags.push("Project");
            const file = `src/2-projects/${project.title}.md`;
            const data = JSON.stringify(project, null, 2);
            fs.writeFile(file, `---json\n${data}\n---`, { encoding:"utf-8" }, () => {
                //console.log(`Written ${file}`)
            })
        });
    }
})
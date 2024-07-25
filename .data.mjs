import fs from "fs";
import directusToData from "directus-to-data";


fs.readdirSync("src/projects/").forEach((file) => {
    if (file.endsWith(".md")) {
        fs.rmSync("src/projects/" + file)
    }
});
directusToData({
    configFilename: ".directus.json",
    outputFilename: "src/_data/projects.json",
    callback: (projects) => {
        projects.forEach((project) => {
            const file = `src/projects/${project.title}.md`;
            project.layout = "project.pug";
            
            const data = JSON.stringify(project, null, 2);
            const markdown = 
                `---json
                ${data}
                ---
                # ${project.title}
                ${project.intro}

                ## Achievements
                ${project.achievements}

                ## Future improvements
                ${project.future_improvements}
                `.replaceAll(/^ */gm, "")
            fs.writeFile(file, markdown, { encoding:"utf-8" }, () => {
                //console.log(`Written ${file}`)
            })
        });
    }
})
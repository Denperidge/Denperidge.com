import markdownit from "markdown-it";

const md = markdownit();

export const data = {
    layout: "base.pug",
    tags: [ "Project" ],
    pagination: {
        data: "DenperidgeProjects",
        size: 1,
        alias: "project"
    },
    eleventyComputed: {
        permalink: (data) => `projects/${data.project.path}/index.html`,
        title: (data) => `${data.project.title}`,
        titleOverride: (data) => `${data.project.title} - Project - Denperidge.com`
    }
};

export function render(data) {
    const content = md.render(`
# [Projects/](..) ${data.project.title}
${data.project.intro}

## Achievements
${data.project.achievements}

## Future improvements
${data.project.future_improvements}
`.replaceAll(/^ */gm, ""));
    return `<main id="main">${content}</main>`
}
/*
    if hrefs
        h2 Links:
        ul
            each link in hrefs
                -
                    let url = link.url.toLowerCase();
                    let host = null;
                    let text;
                    if (url.includes("github")) { host = "GitHub" }

                    if (host) { text = `View the ${link.name} repo on ${host}`; }
                    else { text = `Visit the ${title} website`; }
                li 
                    a(href=link.url)=text
    
*/
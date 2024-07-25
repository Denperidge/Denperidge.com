---json
{
"id": 86,
"sort": null,
"tags": [
"CI",
"GitHub",
"Node.js",
"JavaScript",
"npm",
"CLI",
"CMS",
"Directus",
"Active",
"Documentation"
],
"title": "directus-to-data",
"hrefs": [
{
"name": "npm",
"url": "https://www.npmjs.com/package/directus-to-data"
},
{
"name": "directus-to-data",
"url": "https://github.com/Denperidge/directus-to-data"
}
],
"description": "A minimal utility to save a specific Collection from Directus into a local JSON file!",
"intro": "I wanted to use Directus in git-based way. With this utility, that task is a lot easier!",
"achievements": "- Allows you to fetch data from Directus with minimal busywork\n- Multiple configuration methods (CLI, json config, programmatic or environment variables), which can be used interchangeably\n- Documented through README.md and JSDoc\n- Integrates nicely with CI, allowing automated git commits of data with subsequent deploys. See the [repo of Denperidge.com](https://github.com/Denperidge/denperidge.github.io/blob/main/.github/workflows/directus.yml)",
"future_improvements": "- As of writing, no support for images, multiple collections at once or different auth methods\n- Current asynchronous-ness does not tie in well with SSGs\n- Crashes when run with no authentication, instead of catching",
"path": "directus-to-data",
"layout": "project.pug",
"titleOverride": "directus-to-data - Project - Denperidge.com"
}
---
# [Projects/](..) directus-to-data
I wanted to use Directus in git-based way. With this utility, that task is a lot easier!

## Achievements
- Allows you to fetch data from Directus with minimal busywork
- Multiple configuration methods (CLI, json config, programmatic or environment variables), which can be used interchangeably
- Documented through README.md and JSDoc
- Integrates nicely with CI, allowing automated git commits of data with subsequent deploys. See the [repo of Denperidge.com](https://github.com/Denperidge/denperidge.github.io/blob/main/.github/workflows/directus.yml)

## Future improvements
- As of writing, no support for images, multiple collections at once or different auth methods
- Current asynchronous-ness does not tie in well with SSGs
- Crashes when run with no authentication, instead of catching

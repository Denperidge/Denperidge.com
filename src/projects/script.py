from yaml import load as yaml_load, FullLoader
from json import dump as json_dump
from glob import glob

md_paths = glob("**/*.md") + glob("*.md")

export = []

for md_path in md_paths:
    with open(md_path, "r", encoding="utf-8") as md_file:
        md_file_data = md_file.read().strip().strip("-")
        data = yaml_load(md_file_data, FullLoader)
    
    if data is None:
        print(md_path, "data null")

    del data["layout"]

    try:
        for key in ["good_things", "bad_things"]:
            things = data[key]
            markdown = ""
            for thing in things:
                markdown += f"- {thing}\n"
            if key == "good_things":
                new_key = "achievements"
            else:
                new_key = "future_improvements"
            data[new_key] = markdown
    except KeyError as e:
        print(md_path, "has no", key)

    try:
        tags = []
        for tag in data["tags"]:
            new_tag = ""
            if tag == "html":
                new_tag = "HTML"
            elif tag == "scss":
                new_tag = "SCSS"
            elif tag == "css":
                new_tag = "CSS"
            elif tag == "js":
                new_tag = "JavaScript"
            elif tag == "ci":
                new_tag = "CI"
            elif tag == "jquery":
                new_tag = "jQuery"
            elif tag == "pypi":
                new_tag = "PyPI"
            else:
                new_tag = str(tag).title()
            
            new_tag = new_tag.replace("Github", "GitHub")
            
            tags.append(new_tag)
        data["tags"] = tags
    except KeyError as e:
        print(md_path, "has no", key)



    export.append(data)


print(len(export))

with open("export.json", "w", encoding="utf-8") as file:
    json_dump(export, file)

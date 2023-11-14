---
layout: project.pug
title: Facebook Event Aggregator
description: Scrape all upcoming events from specific FB pages, export them to a static website & .ics files, publish it automatically to Git(Hub Pages). 
tags: active

intro: Facebook and Meta have enough ethical problems to scare most people. However, the widespread adoption of their platforms necessitates their existence for being made aware of events. What if you wanted to be kept up to date on every event, and also not be reliant on Facebook? 

hrefs:
    - name: Facebook-Event-Aggregator
      url: https://github.com/Denperidge/facebook-event-aggregator

good_things:
  - Scrapes with Selenium, exports with Jinja & ics.py
  - The export works as a full static website
  - As much necessary information as possible is scraped
  - A proper py.test setup, complete with test coverage

bad_things:
  - At the time of writing, more stability, tests & coverage should be added
---

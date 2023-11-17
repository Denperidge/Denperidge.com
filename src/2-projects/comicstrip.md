---
layout: project.pug
title: (Fork) comicstrip
description: A fork of a fork of comicstrip, allowing in-code usage of the previously CLI-only program
tags:
  - python
  - fork
  - ci
  - ci

intro:
    Comicstrip is a very neat program. It cuts up a comic page into different panes!
    However, the original only allows for Python2 usage. And while the fork fixes that,
    it still lacks the ability to be used as anything but a command line tool.
    What if someone created exports that allowed for using comicstrip in a different program?

hrefs:
    - name: Denperidge fork
      url: https://github.com/Denperidge/comicstrip
    - name: fork I forked
      url: https://github.com/sohamsil/comicstrip
    - name: original project
      url: https://github.com/mozillamonks/comicstrip

good_things:
  - Fork of a fork! Build on existing solutions, don't reinvent the wheel where not needed.
  - It works! A previously CLI-only tool, now a tool for both coding & CLI usage.
  - Added a proper entry in the changelog file

bad_things:
  - I didn't do a full release on pypi
  - The README could have done with more updates due to the restructuring
---

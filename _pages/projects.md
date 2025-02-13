---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

{% include base_path %}
During my graduate studies at the University of Michigan, I worked on several projects focused on Machine Learning, Natural Language Processing, and large language models, which are detailed below.

{% for post in site.projects %}
  {% include archive-single.html %}
{% endfor %}

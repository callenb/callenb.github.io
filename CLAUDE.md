# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Jekyll-based personal blog focused on Jewish family history and genealogy. The site is built using the "Hally" theme and is deployed to GitHub Pages at callenb.github.io (served from https://callenb.org).

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve site locally with live reload
bundle exec jekyll serve

# Build site (output to _site/)
jekyll serve
```

### Content Creation with Octopress
The repository uses Octopress for content scaffolding. Templates are in `_templates/` directory.

```bash
# Create a new post
bundle exec octopress new post "Post Title"

# Create a new page
bundle exec octopress new page "Page Title"

# Create a new draft
bundle exec octopress new draft "Draft Title"
```

### Deployment
The site deploys to a separate repository (callenb.github.io) via the `.deploy/` directory, which is a git submodule pointing to the deployment repository. The deployment configuration is in `_deploy.yml`.

## Architecture

### Jekyll Configuration
- **Main config**: `_config.yml` contains site settings, author info, social links, and plugin configuration
- **Plugins**: Uses multiple Jekyll plugins including:
  - `jekyll-paginate-v2` for pagination (10 posts per page)
  - `jekyll-tagging` for tag support
  - `jekyll-hebcal` (custom plugin from https://github.com/callenb/jekyll-hebcal)
  - `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-feed`
  - `octopress-image-tag` for image handling

### Directory Structure
- **`_posts/`**: Blog posts in markdown format (YYYY-MM-DD-title.md)
- **`_pages/`**: Static pages (about.md, privacy-policy.md)
- **`_layouts/`**: HTML templates (default, post, page, tag_page)
- **`_includes/`**: Reusable HTML components (header, footer, navigation, etc.)
- **`_sass/`**: SCSS stylesheets organized by category:
  - `0-settings/`: Configuration variables
  - `1-tools/`: Utilities and libraries (normalize, reset, grid, syntax highlighting)
  - `2-base/`: Base styles
  - `3-modules/`: Component styles (header, footer, search, pagination, etc.)
  - `4-layouts/`: Layout-specific styles (home page, post, page, tags)
- **`_templates/`**: Octopress templates for new content (post, page, draft)
- **`_site/`**: Generated static site (git-ignored)
- **`.deploy/`**: Git submodule for deployment repository
- **`js/`**: JavaScript files (common.js uses jQuery for UI interactions)
- **`images/`**: Image assets
- **`assets/`**: Other static assets

### Post Front Matter Structure
Posts use YAML front matter with these fields:
```yaml
layout: post
title: "Post Title"
date: YYYY-MM-DDTHH:MM:SS+TZ
description: "Brief description"
category: genealogy
image: '/images/path/to/image.jpg'
image-caption: "Image caption"
author: callenb
locale: en_GB
status: "Work In Progress" (or omit if complete)
published: true
```

### Frontend Features
- **Masonry grid layout** for post listings
- **AJAX pagination** ("Load More" button)
- **Search functionality** powered by search.json
- **Responsive header** that hides on scroll
- **Image zoom** on click
- **Disqus comments** integration
- **Google Analytics** integration (gtag)

### SASS/CSS Architecture
Main stylesheet is `_sass/main.scss` which imports all partials using `@use` directives. Styles are organized in a modular architecture from settings → tools → base → modules → layouts.

### Branch Strategy
- **Main branch**: `source` (development branch)
- **Current branch**: Check git status for current working branch
- **Deployment**: Builds are pushed to the `master` branch of callenb.github.io repository

## Key Customizations
- Custom `jekyll-hebcal` plugin for Hebrew calendar dates (loaded from git repository)
- Custom pagination configuration with 10 posts per page, trailing pages (2 before/after)
- Tag system with dedicated tag pages
- SEO optimizations via jekyll-seo-tag with Twitter Card support

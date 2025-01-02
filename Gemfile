source "https://rubygems.org"

gem "bundler"
gem "jekyll"

# Use Octopress with Jekyll
gem 'octopress', '~> 3.0'

# Other required gems or specific versions
gem "kramdown", ">= 2.3.1"
gem "csv"
gem "base64"


group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-feed", "~> 0.16"
  gem "jekyll-seo-tag"
  gem "octopress-image-tag"
  gem "jekyll-paginate-v2", '~> 3.0'
  gem "jekyll-tagging"
  gem 'jekyll-last-modified-at', '~> 1.3'
  gem "jekyll-hebcal", git: 'https://github.com/callenb/jekyll-hebcal'
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

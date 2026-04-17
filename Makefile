.PHONY: build serve deploy

build:
	JEKYLL_ENV=production bundle exec jekyll build

serve:
	bundle exec jekyll serve --livereload

deploy: build
	cd _site && \
	git add -A && \
	git commit -m "Deploy: $$(date '+%Y-%m-%d %H:%M:%S')" && \
	git push

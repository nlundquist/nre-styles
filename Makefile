TARGET_VERSION ?= 0.0.1

# This should be run after every merge to master
build:
	npm install
	npm run build

release:
	npm version --no-git-tag-version $(TARGET_VERSION)
	npm install
	npm run build

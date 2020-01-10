install:
	npm install 

install_babel:
	npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
build: 
	rm -rf dist
	npm run build

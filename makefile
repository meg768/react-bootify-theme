
increase-package-version:
	npm run increase-package-version

transpile:
	npm run transpile

publish: transpile increase-package-version
	npm publish

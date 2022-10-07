info:
	@echo
	@echo "make targets:"
	@echo " * help:  show help info"
	@echo " * dev:   run the npm dev, to a temporary deply at localhost"
	@echo " * build: run the npm build and save /out folder"
	@echo " * serve: run the npm serve after build, to also deploy localhost"
	@echo " * rm_rehydration: remove the rehydration data from /out after the build"
	@echo

help:
	@echo "See the README file or /docs folder"

dev:
	npm install
	@echo
	@echo " Note: on npm error ERESOLVE you can install with --force."
	@echo "--- Bellow to open localhost:3000 on browser ---"
	@echo
	npm run dev

build:
	npm install
	@echo
	@echo " Note: on npm error ERESOLVE you can install with --force."
	@echo "--- Bellow building on /out as static website ---"
	@echo
	npm run build

serve: build
	@echo
	@echo "--- Bellow to open localhost:8080 on browser ---"
	@echo
	npm run serve

rm_rehydration:
	@echo
	@echo "--- Remove the rehydration data from /out ---"
	@echo
	find out -name '*.html' | xargs perl -0777 -pi -e 's/<script id="__NEXT_DATA__.*?script>//sg;'

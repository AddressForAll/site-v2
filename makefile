help:
	@echo
	@echo "make targets:"
	@echo " * help:  show this help info."
	@echo " * dev:   run the npm dev, to a temporary deply at localhost."
	@echo " * build: makes build-only and rm_rehydration."
	@echo " * serve: run the npm serve after build, to also deploy localhost."
	@echo " * build-only:     run the npm build and save /out folder."
	@echo " * rm_rehydration: remove the rehydration data from /out after the build."
	@echo
	@echo " For more details see the README file and /docs folder."

dev:
	npm install
	@echo
	@echo " Note: on npm error ERESOLVE you can install with --force."
	@echo "--- Bellow to open localhost:3000 on browser ---"
	@echo
	npm run dev

build-only:
	npm install
	@echo
	@echo " Note: on npm error ERESOLVE you can install with --force."
	@echo "--- Bellow building on /out as static website ---"
	@echo
	npm run build
	@echo
	@echo " ... perhaps you need make rm_rehydration."
	@echo

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

status:
	@echo
	@echo "-- git status, to show building changes --"
	@git status

build: | status build-only rm_rehydration
	@echo
	@echo "... OK! IF NO ERROR, YOU CAN PUBLISH DE SITE."
	@echo


.NOTPARALLEL: all

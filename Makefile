build:
	yarn build

build-permission: build
	find ./out -type d -exec sudo chmod 0755 {} \;
	find ./out -type f -exec sudo chmod 0644 {} \;

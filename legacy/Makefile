init: help

serve: ## Run the development server
	bun run dev

build: ## Build the library
	bun run build

publish: ## Publish the library
	npm publish

help: ## Show help and commands list
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

init: help

build: ## Build the project
	@npm run build

preview: ## Preview the project
	@npm run preview

help: ## Show command list
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
# remilink

## Docs
This repository includes a local MkDocs setup that reads source files from `docs/` and builds the generated documentation site into `mkdocs_site/`.

### Install

```bash
uv venv .venv
source .venv/bin/activate
uv pip install -r requirements-docs.txt
```

### Run Locally

Start the live-reloading docs server from the repository root:

```bash
mkdocs serve
```

The local preview is served at `http://127.0.0.1:8001/`.

### Build

Build the documentation site with strict validation:

```bash
mkdocs build --strict
```

Generated output is written to `mkdocs_site/`, so the existing root website files are not overwritten.

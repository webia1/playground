# Playground - Working with Git

## Introduction

Coming soon...

## Die ersten Steps

- (e.g. Github) Repo anlegen
- Einen lokalen Ordner mit Upstream verbinden, Beispiel: `remote add origin https://github.com/webia1/playground.git`
- Ersten Commit erstellen
  - Datei erstellen
  - Datei hinzufügen (stagen) - `git add .`
  - Commit erstellen - `git commit -m "Initial commit"`
  - Auf main renamen: `git branch -M main`
  - Commit pushen - `git push origin main`

## Branches

- main
- develop
- feature/...
- (fix/bugfix)

Details folgen...

## Standard Workflow

```mermaid
gitGraph TB:
commit id: "1"
branch develop
checkout develop
commit id: "2"
branch october20
commit id: "3"
checkout develop
branch jupiter
checkout jupiter
commit id: "3"
commit id: "4"
commit id: "5"
commit id: "6"
checkout develop
merge jupiter # in der reaelen Welt: Pull Request
```

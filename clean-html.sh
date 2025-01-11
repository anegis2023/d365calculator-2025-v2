#!/bin/bash

# Template content
template='<!DOCTYPE html>
<html lang="pl">
  <head>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>'

# Find all HTML files except those in dist and node_modules
find . -name "*.html" -not -path "*/dist/*" -not -path "*/node_modules/*" | while read -r file; do
  echo "$template" > "$file"
done

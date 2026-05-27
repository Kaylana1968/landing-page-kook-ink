# This project uses tailwindcss for styling

## Setup

1. Install the tailwindcss executable at [here](https://github.com/tailwindlabs/tailwindcss/releases).
2. Rename it tailwindcss.exe and add it to the root of this project.
3. Create a file named input.css with this code in it :

```css
@import "tailwindcss";
```

## Run

### Dev :

```bash
./tailwindcss -i ./input.css -o ./dist/output.css --watch
```

### Prod:

```bash
./tailwindcss -i ./input.css -o ./dist/output.css --minify
```

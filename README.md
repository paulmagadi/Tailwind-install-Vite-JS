
# 🚀 Tailwind CSS Installation Using Vite

This guide helps you set up Tailwind CSS in a **Vite + Vanilla JavaScript** project.

---

## 1. Create a Vite Project

```bash
npm create vite@latest
```

- Enter your project name (e.g. `my-tailwind-app`)
- Select **Vanilla** and **JavaScript**

Then navigate to the new project folder:

```bash
cd my-tailwind-app
```

Install dependencies:

```bash
npm install
```

---

## 2. Install Tailwind CSS with Vite Plugin

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## 3. Configure Vite to Use Tailwind CSS

In the root directory, create a `vite.config.js` file (if not auto-created):

```js
// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

---

## 4. Create and Configure Tailwind CSS

In your `src/` folder, create a `styles.css` file and add:

```css
/* src/styles.css */
@import "tailwindcss";
```

---

## 5. Add Tailwind to Your HTML

In your `index.html`, link the stylesheet and add sample content:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind + Vite</title>
    <link href="/src/styles.css" rel="stylesheet">
  </head>
  <body>
    <h1 class="text-3xl font-bold underline text-amber-500 text-center mt-10">
      Hello world!
    </h1>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

---

## 6. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your Tailwind-styled project!



# Deployment
Install the gh-pages package:

bash

`npm install --save-dev gh-pages`


##  Update Build Script in package.json
```
"scripts": {
  ...
    "deploy": "npm run build && gh-pages -d dist"
}
```

## Deploy the project:
bash

`npm run deploy`

Push the codes to github, the website will be deployed to github pages using  *branch* **gh-pages**
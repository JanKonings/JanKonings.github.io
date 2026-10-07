# Jan Konings — Portfolio Website

This is the complete current portfolio, including all eight projects, the CAD section, photos, SolidWorks animation, drawings, and résumé. No build step, package installation, database, or API key is needed.

## Publish on GitHub Pages (free)

1. Extract this ZIP on your computer.
2. On GitHub, create a PUBLIC repository named JanKonings.github.io.
3. Upload the extracted CONTENTS to the repository root. index.html must be at the root, alongside style.css, app.js, data.js, resume.html, and the assets folder. Do not upload the ZIP itself or place everything inside an extra folder.
4. Keep the included .nojekyll file. It disables Jekyll processing. If your upload tool hides it, create it on GitHub using Add file -> Create new file, name it .nojekyll, and commit it with a comment such as "Static site".
5. Open repository Settings -> Pages. Under Build and deployment, choose Deploy from a branch, main, and / (root), then Save.
6. After deployment completes, visit https://jankonings.github.io.

The root-relative asset paths are intended for a root website such as JanKonings.github.io or your own domain. A project URL such as jankonings.github.io/portfolio/ needs path changes.

## Publish on SiteGround

Upload the extracted website contents to your domain's public_html folder using Site Tools -> Site -> File Manager. Keep index.html directly inside public_html and preserve the assets folder.

## Preview locally on your Mac

Open Terminal in the extracted website folder and run:

    python3 -m http.server 8000

Then open http://localhost:8000 in your browser. Stop the server with Control+C. Use the local server because the site uses root-relative paths; opening index.html directly by double-clicking does not resolve those paths correctly.

## Edit the website

- index.html: introduction, experience, education, contact, and page sections.
- data.js: project information, skills, collaborator credits, and repository links.
- style.css: colors, layout, and responsive styling.
- app.js: project panels, filters, and skill matching.
- resume.html: résumé; use Print / Save as PDF in the browser.
- assets/: all photos, animation video, favicon, and project PDFs.

The project matcher uses keyword matching. No live Gemini calls or automatic GitHub sync are included. A live AI feature would require a protected server endpoint; never place an API key in these public files.

## Content sources

Portfolio text combines the four supplied Overleaf résumé variants and Jan's public GitHub repositories, reviewed October 7, 2026. Team credits are retained where documented. Business metrics, GPA, and current role dates reflect the supplied résumés and should be updated as needed.

The ski-binding project includes a real disassembly photo, the original animation, engineering drawings, and a description based on https://github.com/JanKonings/Ski-Binding-3D-Model-Solidworks. Native SolidWorks files stay in that repository and are linked from the website. The ZIP contains every file the website needs, rather than copies of all linked project source repositories.

The temperature node's six-month battery operation is a design target, not a verified field measurement. Publishing on an external host uses that host's access settings; the private access restriction on the current ChatGPT-hosted version is not included in these static files.

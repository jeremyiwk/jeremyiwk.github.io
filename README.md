# Jeremy Welsh’s website

A small personal site made with plain HTML and CSS. No build step or dependencies.

## Preview

Open `index.html` in a browser, or run `python3 -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Edit

- `index.html`: homepage and portrait
- `bio.html`: biography, drafted from the August 2026 resume
- `resume.html`: PDF preview and download links
- `style.css`: shared styles and mobile layouts
- `assets/`: portrait, resume PDF, and favicon

Replace the resume in `assets/` and update its links and date in `resume.html` when adding a newer version.

The new site lives at the repository root. For branch-based GitHub Pages hosting, use the branch containing these files and the `/ (root)` folder as the publishing source.

## Homepage update date

The homepage footer automatically shows the date of the latest commit that changed `index.html` on GitHub’s `main` branch, formatted in Pacific time. Commit and push your homepage edits as usual; no manual date changes are needed. Local, unpushed edits and changes to other files do not affect this date.

`assets/last-updated.js` reads GitHub’s public commits API when the page loads. If JavaScript is disabled, the request fails, or GitHub rate-limits the visitor, the date stays hidden. If the publishing branch changes, update `sha=main` in the script.

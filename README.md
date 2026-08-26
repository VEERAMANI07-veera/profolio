# Portfolio Website

A premium, responsive personal portfolio built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks.

## Files

```
index.html          Page structure (all sections)
style.css            Design system (colors, type, layout, dark mode, animations)
script.js            PROFILE data object + all rendering/interaction logic
assets/images/       Profile photo, favicon, OG image (placeholders — replace these)
assets/projects/     Project thumbnail placeholders
assets/certificates/ Certificate image placeholders
assets/resume.pdf    Add your resume PDF here (referenced by the Resume section)
```

## How to customize

**Everything you need to change lives in one place: the `PROFILE` object at the top of `script.js`.**
Edit the values there — name, roles, about text, skills, education, certificates, projects,
experience, hackathons, achievements, timeline, socials, and contact info — and every section
of the page re-renders itself automatically. You never need to touch `index.html`.

Things marked with `// EDIT` in `script.js` are placeholders you should fill in:
- `PROFILE.education[].institution` and `.score` — your actual school/college names and marks
- `PROFILE.certificates` — your real certificates (title, issuer, date, image path, link)
- `PROFILE.hackathons[0].event` — the real hackathon name/date if this was a live event
- `PROFILE.achievements` — certification and GitHub contribution counts
- `PROFILE.socials` and `PROFILE.contact` — your real GitHub/LinkedIn/Instagram URLs and email

### Replacing images
Drop your own files into `assets/images/`, `assets/projects/`, and `assets/certificates/`,
then update the corresponding path strings in `script.js` (e.g. `profileImage`, each project's
`image`, each certificate's `image`). Recommended sizes: profile photo ~500×500px (square),
project thumbnails ~800×500px (16:10), certificates ~600×420px.

### Adding your resume
Export your resume as a PDF and save it as `assets/resume.pdf` (exact filename). The Resume
section will automatically show a download button and an inline preview.

### Contact form
The form currently opens the visitor's email client with a pre-filled message (no backend
required). To collect submissions directly, replace the `mailto:` logic in `initContactForm()`
inside `script.js` with a `fetch()` call to your own backend or a form service like Formspree.

## Running locally

No build step needed — just open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying

This is a static site — it deploys as-is to GitHub Pages, Netlify, Vercel, or any static host.
For GitHub Pages: push this folder to a repo and enable Pages on the `main` branch.

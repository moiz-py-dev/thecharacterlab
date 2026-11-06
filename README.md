# The Character Lab - Website

Open `index.html` in a browser, or in VS Code right-click it and choose "Open with Live Server".

## Folder structure

```
character-lab-website/
├── index.html
├── css/
│   └── style.css        <- colors, layout, mobile rules (edit --teal/--amber etc. near the top)
├── js/
│   └── script.js         <- team/testimonials data, gallery lightbox, mobile menu, contact popup
└── images/
    ├── logo.png
    ├── hero-background.jpg
    ├── students-learning.jpg
    ├── mosque-silhouette.jpg
    ├── decorative/        <- 4 Islamic art images used near the top of the page
    ├── gallery/            <- 9 "A Typical Learning Experience" gallery photos
    ├── team/               <- 9 team member photos
    └── testimonials/       <- 2 testimonial photos (Anoushay, Eemaan)
```

## Common edits

- **Replace a photo:** put the new image in the same folder with the same file name (or update the matching line in `js/script.js` for team/testimonial photos, since those are referenced by name there).
- **Add a video:** drop the video file into a new `videos/` folder and add a `<video>` tag in `index.html`, or embed a YouTube link with an `<iframe>`.
- **Change text:** edit `index.html` directly, except team bios and testimonials, which live in `js/script.js` (look for `const team = [` and `const testimonials = [`).
- **Change colors:** top of `css/style.css`, inside `:root { ... }`.
- **WhatsApp number / email:** search `js/script.js` and `index.html` for `923197674889` and `hello@thecharacterlab.org`.

Fonts (Fraunces, Plus Jakarta Sans) load from Google Fonts, so an internet connection is needed to see them correctly.

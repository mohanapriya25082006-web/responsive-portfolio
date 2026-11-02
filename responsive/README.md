# Responsive Portfolio — Advanced CSS3

A ready-to-run, mobile-first portfolio built with semantic HTML5, modern CSS3 and vanilla JavaScript.

## Run in Visual Studio Code

1. Extract `responsive-portfolio-vscode.zip`.
2. Open VS Code.
3. Select **File → Open Folder** and choose the extracted `responsive-portfolio-ready` folder.
4. Open `index.html`.
5. Install the **Live Server** extension (Ritwick Dey), if needed.
6. Right-click `index.html` and choose **Open with Live Server**.

No npm install, build command, backend or database is required.

## Features included

- Semantic HTML5 structure and accessible landmarks
- CSS Grid for skills, projects and page layouts
- Flexbox for navigation, buttons and alignment
- Mobile-first responsive CSS with tablet and desktop breakpoints
- CSS custom properties for light and dark themes
- Theme preference saved in localStorage
- Responsive mobile navigation with accessible state
- Scroll reveal effects using IntersectionObserver
- Keyboard focus styles and reduced-motion support
- Contact form validation and `mailto:` handoff
- Current year generated automatically

## Customize before submitting

Open `index.html` and replace:
- `Alex Morgan` and `Alex` with your name
- The introduction and About Me text with your own details
- The sample projects with projects you have actually built
- `hello@example.com` with your email address

Also replace `hello@example.com` in `js/script.js` with the same email address. The contact form opens the visitor's default email application; it does not send or store messages on a server.

## Responsive testing

Use Chrome or Edge DevTools:
1. Press `F12`.
2. Press `Ctrl + Shift + M`.
3. Test widths such as 375px (mobile), 768px (tablet), 1024px and 1440px (desktop).

Test the mobile menu, theme toggle, theme persistence after refresh, project cards and contact form.

## Folder structure

```text
responsive-portfolio-ready/
├── .vscode/
│   └── extensions.json
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
└── README.md
```

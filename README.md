# AllSearch Link-in-Bio — Static Export (GitHub Pages / Netlify Drop)

This project is preconfigured for **Next.js static export** so you can host it for **$0** on GitHub Pages or Netlify.

## Local Preview
```bash
npm install
npm run build   # builds and runs `next export` to /out
npx serve out   # preview the static site at http://localhost:3000
```

## Deploy — GitHub Pages
1) Create a new GitHub repo (e.g., `allsearch-linkinbio`).
2) Build the static site:
```bash
npm install
npm run build   # creates /out
```
3) Publish the `out/` folder to the `gh-pages` branch:
```bash
cd out
git init
git add -A
git commit -m "Exported site"
git branch -M gh-pages
git remote add origin https://github.com/<you>/allsearch-linkinbio.git
git push -u origin gh-pages
```
4) In the repo **Settings → Pages**, set **Branch = gh-pages / root** and Save.
5) Your site will be live at: `https://<you>.github.io/allsearch-linkinbio/`

> If you publish under a subpath and assets 404, edit `next.config.js` and set:
> ```js
> basePath: '/allsearch-linkinbio',
> assetPrefix: '/allsearch-linkinbio/',
> ```
> then re-run `npm run build`.

## Deploy — Netlify Drop
1) Build: `npm run build` → gets `/out`.
2) Go to https://app.netlify.com/drop and drag the `/out` folder in.
3) Done—Netlify gives you a live URL.

## Edit Links / Branding
- Edit `app/components/AllSearchLinkInBio.tsx`.
- The logo is an external `<img>` URL so static export works fine.


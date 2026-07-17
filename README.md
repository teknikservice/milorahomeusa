# Milora Home — Website

Single-file website for milorahomeusa.com. Everything lives in `index.html`.
Fabric photos live in `/images`.

## One-time setup

1. Create a GitHub repository (for example `milora-site`) and upload these files.
2. In the repo: Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder `/ (root)` → Save.
3. Still in Pages settings, add the custom domain `milorahomeusa.com` and follow
   GitHub's DNS instructions at your registrar (a CNAME record for www and
   A records for the apex domain). Enable "Enforce HTTPS" once it verifies.

## Adding a fabric

1. Prepare the photo: JPG, about 1600 px on the long side, under 500 KB.
   Name it after the fabric code, for example `ml-3733-004.jpg`.
2. In the repo, open the `images` folder → "Add file" → "Upload files".
3. Open `index.html` → pencil icon to edit → find `ADD FABRICS HERE`.
4. Copy an existing fabric block, paste it, and edit:

```js
{
  id: "botanical-004-3733",          // unique, lowercase, no spaces
  name: "Botanical Archive",
  code: "004-3733",
  collection: "Botanical Archive",   // new collection names become filters automatically
  image: "images/ml-3733-004.jpg",
  specs: {
    composition: "62% Cotton, 38% Polyester",
    width: "55 in / 140 cm",
    abrasion: "40,000 double rubs (Martindale)",
    usage: "Upholstery"
    // any spec you leave out simply is not shown
  }
},
```

5. Commit changes. The site updates itself in about a minute.

## Trade shows

Search `index.html` for `SHOWS`. Upcoming shows go in `SHOWS`; after a show
ends, delete its row and add a one-line entry to the top of `PAST_SHOWS`.
If `SHOWS` is empty, the "Where to find us" list hides automatically.

## Before going live — required

- Replace every `image:` link that still points to `static.wixstatic.com`
  with a file in `/images`. Those Wix links die when the Wix subscription ends.
- Replace the sample specs on Botanical Archive 001-3733 with real numbers.
  The ones in the file are placeholders and must not be published.

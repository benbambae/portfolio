# portfolio

Source for **https://benbambae.com/portfolio/**, the personal site of Benjamin Lee (Platform Engineer, OpenShift / Kubernetes).

## Layout

```
public/     ← the website; the only directory that gets published
README.md   ← this file (never served)
```

It's a plain static site: HTML, CSS and a tiny bit of JS. There's no build step and it makes no third-party requests.
All asset paths are relative, so the site works under any path prefix.

## Local preview

```bash
cd public && python3 -m http.server 8000
# open http://localhost:8000
```

## Deployment

Pushes to `main` go live automatically within about a minute. The web server pulls this repo on a timer and publishes `public/` as a new release, switching to it atomically. Nothing has to reach into the server, and there are no deploy credentials involved.

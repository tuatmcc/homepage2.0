# this is for a text deployment on vercel, and is not for static export.
echo "User-agent: *
Disallow: /" > public/robots.txt
mv next.config.mjs next.config.mjs.bak
mv next.config.mjs.dev next.config.mjs
next build
mv next.config.mjs next.config.mjs.dev
mv next.config.mjs.bak next.config.mjs

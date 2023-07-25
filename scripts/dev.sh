# this is for a text deployment on vercel, and is not for static export.
echo "User-agent: *
Disallow: /" > public/robots.txt
npx next build

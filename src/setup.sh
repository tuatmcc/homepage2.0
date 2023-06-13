# run this before any build
rm -rf content
git clone --depth 1 https://github.com/tuatmcc/hp-md-content.git content
rm -rf content/.git content/.gitignore content/README.md
pnpm contentlayer

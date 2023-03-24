# run this before any build
rm -rf content
git clone --depth 1 https://github.com/tuatmcc/markdown-articles.git content
rm -rf content/.git content/.gitignore content/README.md
npx contentlayer build

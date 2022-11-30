module.exports = () => {
  const fs = require('fs')

  const targetFile = fs.readFileSync('../../out/index.html', 'utf8')

  const newFile = targetFile.replace(
    /href="\/_next/g,
    'href="/mcc-website/_next'
  )

  fs.writeFileSync('../../out/index.html', newFile, 'utf8')
}

module.exports = (workspace) => {
  const fs = require('fs')
  const filePath = fs.readdirSync(`${workspace}/out`).map((filePath) => {
    const absolutePath = `${workspace}/out/${filePath}`
    const newFile = fs.readFileSync(absolutePath, 'utf8').replace(
      /href="\/_next/g,
      'href="/mcc-website/_next'
    ).replace(/src="/g, 'src="/mcc-website')
    fs.writeFileSync(absolutePath, newFile, 'utf8')
  })
}

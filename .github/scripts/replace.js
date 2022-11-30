module.exports = (workspace) => {
  const fs = require('fs')
  const filePaths = fs.readdirSync(`${workspace}/out`).map((filePath) => {
    const absolutePath = `${workspace}/out/${filePath}`
    const newFile = fs
      .readFileSync(absolutePath, 'utf8')
      .replace(/href="/g, 'href="/mcc-website')
      .replace(/src="/g, 'src="/mcc-website')
    fs.writeFileSync(absolutePath, newFile, 'utf8')
  })
}

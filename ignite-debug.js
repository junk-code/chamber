const Bundler = require('parcel-bundler')
const path = require('path')

const entryFile = path.join(__dirname, './src/index.html')

const options = {
  target: 'electron',
  outDir: './build',
  useMaps: true,
  watch: false,
  detailedReport: true,
  autoInstall: false
}

const bundler = new Bundler(entryFile, options)
bundler.bundle().then(() => {
  console.log('Bundle Completed.')
})

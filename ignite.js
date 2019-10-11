const Bundler = require('parcel-bundler')
const concurrently = require('concurrently')
const path = require('path')

const { devPort } = require('./common/settings.js')

const entryFile = path.join(__dirname, `./src/index.html`)

const options = {
  port: devPort,
  target: 'electron',
  outDir: './build',
  useMaps: true,
  watch: true,
  // detailedReport: true,
  autoInstall: false
}

const bundler = new Bundler(entryFile, options)
bundler.serve(devPort).then(server => {
  concurrently(['electron .']).then(() => {
    server.close()
    process.exit(0)
  }).catch(error => {
    console.error(error)
  })
})

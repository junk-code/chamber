const Bundler = require('parcel-bundler')
const concurrently = require('concurrently')
const path = require('path')

const { getPortKey } = require('./utilities/getPortKey.js')

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
  const portKey = getPortKey()
  const portRegex = /\d+$/g
  const portString = portRegex.exec(server._connectionKey)[0]
  if (portString.length > 0) {
    concurrently([`${portKey}=${portString} && electron .`]).then(() => {
      server.close()
      process.exit(0)
    }).catch(error => {
      console.error(error)
    })
  }
})

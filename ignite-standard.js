const Bundler = require('parcel-bundler')
const path = require('path')
const electronPath = require('electron')

const { getPortKey } = require('./utilities/getPortKey.js')

const { devPort } = require('./common/settings.js')

const entryFile = path.join(__dirname, './src/index.html')

const { spawn } = require('child_process')

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
    const instance = spawn(electronPath, [
      'main.js',
      '--remoteDebuggingPort=9223'
    ],
    {
      detached: true,
      cwd: __dirname,
      env: {
        ...process.env,
        [portKey]: portString
      }
    })

    instance.on('disconnect', () => {
      console.log('DISCONNECT')
    })

    instance.on('exit', () => {
      server.close()
      process.exit(0)
    })
  }
})

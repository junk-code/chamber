const electronBuilder = require('electron-builder')
const { Platform } = electronBuilder
const Bundler = require('parcel-bundler')
const path = require('path')

const entryFile = path.join(__dirname, './src/index.html')
const parcelOptions = {
  target: 'electron',
  outDir: './build',
  useMaps: 'false',
  watch: false,
  detailedReport: true
}
const parcelBundler = new Bundler(entryFile, parcelOptions)

parcelBundler.bundle().then(() => {
  console.log('🏗️ Successfully built app using Parcel Bundler.')
  const macBuildPromise = electronBuilder.build({
    targets: Platform.MAC.createTarget(),
    config: {
      // TODO: Add Mac config options
    }
  }).then(() => {
    console.log('🍎 Successfully built Mac app.')
  })
  const windowsBuildPromise = electronBuilder.build({
    targets: Platform.WINDOWS.createTarget(),
    config: {
      // TODO: Add Windows config options
    }
  }).then(() => {
    console.log('💻 Successfully built Windows app.')
  })
  const linuxBuildPromise = electronBuilder.build({
    targets: Platform.LINUX.createTarget(),
    config: {
      // TODO: Add Linux config options
    }
  }).then(() => {
    console.log('👾 Successfully built Linux app.')
  })
  return Promise.all([
    macBuildPromise,
    windowsBuildPromise,
    linuxBuildPromise
  ])
}).then(() => {
  console.log('🚧 Electron Builder Builds Complete.')
}).catch(error => {
  console.error(error)
})

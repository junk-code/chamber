const { getAppName } = require('./getAppName.js')

const appName = getAppName()

const formattedAppName = appName.toUpperCase().replace(/[\W\s]+/g, '_')

const key = `${formattedAppName}_PORT`

const getPortKey = () => {
  return key
}

module.exports = {
  getPortKey
}

const { getAppName } = require('./getAppName.js')

const key = `${getAppName().toUpperCase()}_PORT`

const getPortKey = () => {
  return key
}

module.exports = {
  getPortKey
}

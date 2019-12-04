const appName = process.env.npm_package_name

if (appName === 'chamber') {
  console.warn(`[Chamber Warning] Please change the 'name' property in your package.json file from 'chamber' to something else more descriptive.`)
}

if (!appName) {
  console.error(`[Chamber Error] There is no 'name' property specified in your package.json file. Using a fallback.`)
}

const getAppName = () => {
  return appName || 'chamber_no_name_in_package_dot_json_file'
}

module.exports = {
  getAppName
}

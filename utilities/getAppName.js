const getAppName = () => {
  return process.env.npm_package_name || 'no_name_in_package_dot_json_file'
}

module.exports = {
  getAppName
}

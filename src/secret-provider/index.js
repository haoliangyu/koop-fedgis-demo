
const provider = {
  type: 'provider',
  name: 'secret-provider',
  version: '0.1.0',
  hosts: true,
  disableIdParam: true,
  Model: require('./model')
}

module.exports = provider

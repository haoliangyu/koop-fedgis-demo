const secretProvider = require('./secret-provider');
const providerSocrata = require('@koopjs/provider-socrata');
const outputs = [];
const auths = [];
const caches = [];
const plugins = [{
  instance: providerSocrata
}, {
  instance: secretProvider
}];
module.exports = [...outputs, ...auths, ...caches, ...plugins];
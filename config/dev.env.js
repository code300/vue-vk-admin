var merge = require('webpack-merge')
var prodEnv = merge('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_ROOT:'"http://139.196.42.209:5004"'
})
const middleware = {}

middleware['index'] = require('..\\middleware\\index.js')
middleware['index'] = middleware['index'].default || middleware['index']

middleware['notAuth'] = require('..\\middleware\\notAuth.js')
middleware['notAuth'] = middleware['notAuth'].default || middleware['notAuth']

export default middleware

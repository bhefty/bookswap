/* eslint-disable global-require */
const express = require('express')
const path = require('path')
const compression = require('compression')
const pkg = require(path.resolve(process.cwd(), 'package.json'))
const mongoose = require('mongoose')
const dbOptions = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
}
mongoose.Promise = global.Promise

// Dev middleware
const addDevMiddlewares = (app, webpackConfig, MONGO_URI) => {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only'
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))

  // MongoDB connection
  mongoose.connect(MONGO_URI, dbOptions)

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem
  if (pkg.dllPlugin) {
    app.get(/\.dll\.js$/, (req, res) => {
      const filename = req.path.replace(/^\//, '')
      res.sendFile(path.join(process.cwd(), pkg.dllPlugin.path, filename))
    })
  }

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404)
      } else {
        res.send(file.toString())
      }
    })
  })
}

// Production middleware
const addProdMiddlewares = (app, options, MONGO_URI) => {
  const publicPath = options.publicPath || '/'
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build')

  // MongoDB connection
  mongoose.connect(MONGO_URI, dbOptions)

  // compression middleware compresses the server responses which makes them
  // smaller (applies also to assets). Find out more about this technique at
  // http://mxs.is/googmy
  app.use(compression())
  app.use(publicPath, express.static(outputPath))

  app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')))
}

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production'
  const MONGO_URI = options.MONGO_URI

  if (isProd) {
    addProdMiddlewares(app, options, MONGO_URI)
  } else {
    const webpackConfig = require('../../internals/webpack/webpack.dev.babel')
    addDevMiddlewares(app, webpackConfig, MONGO_URI)
  }

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => console.log(`Connected to ${MONGO_URI}`))

  return app
}

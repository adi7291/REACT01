const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // specify the path you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:5000', // specify the target server
      changeOrigin: true,
    })
  );
};
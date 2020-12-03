/*
 * @Author: wangya 
 * @Date: 2020-12-02 11:14:04 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-12-02 11:24:06
 */

const {createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
  // 将原来的proxy改为createProxyMiddleware 
    createProxyMiddleware(
      '/api',
      {
        target: 'http://yapi.imeete.com/mock/705/api',
        changeOrigin: true
      }
    )
  )
};
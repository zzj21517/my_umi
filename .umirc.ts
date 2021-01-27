/*
 * @Author: your name
 * @Date: 2021-01-06 20:14:15
 * @LastEditTime: 2021-01-27 22:41:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\.umirc.ts
 */
import { defineConfig } from 'umi';
const CheckCompilerHooksPlugin = require('./plugins/checkCompilerHooksPlugin')
export default defineConfig({
  chainWebpack(config, { env, webpack, createCSSRule }) {
    config.plugin('CheckCompilerHooksPlugin').use(CheckCompilerHooksPlugin)
  },
  hash: true,
  history: {
    type: 'hash',
  },
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  dva: {
    skipModelValidate: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
});

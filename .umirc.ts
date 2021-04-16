/*
 * @Author: your name
 * @Date: 2021-01-06 20:14:15
 * @LastEditTime: 2021-04-16 15:42:13
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
  dva: {
    skipModelValidate: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
});

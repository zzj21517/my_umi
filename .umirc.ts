/*
 * @Author: your name
 * @Date: 2021-01-06 20:14:15
 * @LastEditTime: 2021-01-20 21:14:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\.umirc.ts
 */
import { defineConfig } from 'umi';

export default defineConfig({
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

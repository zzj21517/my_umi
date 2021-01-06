import { defineConfig } from 'umi';

export default defineConfig({
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

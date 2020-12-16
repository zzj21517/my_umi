import { defineConfig } from 'umi';

export default defineConfig({
  dva:{
    skipModelValidate:true
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});

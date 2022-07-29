import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    dark: true,
  },
  routes: [
    // 配置式路由
    { path: '/', component: '@/pages/index' },
    { path: '/layout', component: '@/views/Layout/layout' },
  ],
  fastRefresh: {},
});

// 配置项拆分，避免冗余
import { defineConfig } from 'umi';
import routes from './routers';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    dark: true,
  },
  layout: {
    title: '小可蛋糕后台',
    logo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-1.rar8.net%2F2021%2F8%2F27%2F7cebba5c-b8d8-4255-ab6e-8a4e6688839d.png&refer=http%3A%2F%2Fi-1.rar8.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661677163&t=558464fae248ce6c64319308dab65c99',
  },
  routes,
  fastRefresh: {},
});

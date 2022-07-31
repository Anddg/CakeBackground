export default [
  { path: '/', component: '@/pages/index', name: '首页' },
  { path: '/layout', component: '@/views/Layout/layout', name: '分类' },
  {
    path: '/StuManer',
    component: '@/views/StuManer',
    name: '连锁店',
    routes: [
      {
        path: '/StuManer/firstore',
        name: '分店',
        component: '@/views/StuManer/component/FirStore',
      },
    ],
  },
];

import mockjs from 'mockjs';
//模拟接口mock
export default {
  'GET /api/store_info': {
    address: '青青草原一号街二栋',
    id: '001',
    manager: '懒洋洋',
    title: '小可一号店',
    pro_title: '开店首折，打骨折！！！',
  },
  'get /api/user_info': mockjs.mock({
    code: 200,
    status: 'ok!',
    'data|30': [
      {
        name: '@cname()',
        content: '@cparagraph()',
        address: '@county(true)',
        'id|+1': 353,
        date: '@date("yyyy-MM-dd")',
      },
    ],
  }),
};

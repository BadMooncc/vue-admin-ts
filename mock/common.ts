import Mock from 'mockjs'

Mock.mock('/api/nav', {
  data:
    {
      code: 1,
      active: '4',
      msg: '',
      data: [
        { id: '4',model: 'dashboard', name: 'dashboard', label: 'dashboard', icon: 'menu', link: '/dashboard',meta:{title: '首页',id:'4'} },
        { id: '2',model: 'about', name: 'about', label: 'about', icon: 'menu', link: '/about',meta:{title: '关于我们',id:'2'} },
        { id: '1',model: 'home',name:'home', label: '导航1', icon: 'menu', link: '' ,children: [
          {id: '5',model: 'home',name:'home1', label: '导航231', icon: 'menu', link: '/home/home1',meta:{title: '导航123',id:'5'} }
        ]},
        { id: '3',model: 'concat', name: 'concat', label: 'concat', icon: 'menu', link: '/concat',meta:{title: '联系我们',id:'3'}}
      ]
    }
});
Mock.mock('/api/login', {
 
    code: 1,
    msg: '4',
    data: {
      username: '机智的赵先生'
    }
});


import Mock from 'mockjs'

Mock.mock('/api/nav', {
  data:
    {
      code: 1,
      data: [
        { id: '1',model: 'home',name:'home', label: '导航1', icon: 'menu', link: '' },
        { id: '2',model: 'about', name: 'about', label: 'about', icon: 'menu', link: '/about' },
        { id: '3',model: 'concat', name: 'concat', label: 'concat', icon: 'menu', link: '/concat'}
      ]
    }

});


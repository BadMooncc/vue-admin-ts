import Mock from 'mockjs'

Mock.mock('/api/nav', {
  data:
    {
      code: 1,
      active: '4',
      data: [
        { id: '4',model: 'dashboard', name: 'dashboard', label: 'dashboard', icon: 'menu', link: '/dashboard' },
        { id: '2',model: 'about', name: 'about', label: 'about', icon: 'menu', link: '/about' },
        { id: '1',model: 'home',name:'home', label: '导航1', icon: 'menu', link: '' ,children: [
          {id: '5',model: 'home',name:'home1', label: '导航231', icon: 'menu', link: '/home/home1' }
        ]},
        { id: '3',model: 'concat', name: 'concat', label: 'concat', icon: 'menu', link: '/concat'}
      ]
    }

});


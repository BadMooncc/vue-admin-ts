import Mock from 'mockjs'

Mock.mock('/api/nav', {
  data:
    {
      code: 1,
      data: [
        { id: '1', label: '导航1', icon: 'menu', link: '',children:[
          { id: '5', label: '选项1', icon: 'menu', link: '' },
          { id: '6', label: '选项2', icon: 'menu', link: ''}
        ] },
        { id: '2', name: 'about', label: 'about', icon: 'menu', link: '/about' },
        { id: '3', name: 'home', label: 'home', icon: 'menu', link: '/home'}
      ]
    }

});


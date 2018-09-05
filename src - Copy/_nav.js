export default {
  items: [
    {
      name: 'Ticket Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        // text: 'NEW',
      },
    },

    {
      title: true,
      name: 'Ticket Features',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Tickets',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'All Tickets',
          url: '/base/Ticket',
          icon: 'icon-puzzle',
        },
        {
          name: 'Add Ticket',
          url: '/base/AddTicket',
          icon: 'icon-drop',
        },
        {
          name: 'Find Ticket',
          url: '/base/FindTicket',
          icon: 'icon-pencil',
        },
        {
          name: 'Delete Ticket',
          url: '/base/deleteTicket',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      title: true,
      name: 'Login/SignUp',
    },
    {
      name: 'SignIn',
      url: '/SignIn',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
      ],
    },
  ],
};

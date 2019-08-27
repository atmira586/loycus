interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [


  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },


  /******************************  
   * Aytorization menu
   *****************************/
  {
    title: true,
    name: 'Autorización'
  },
      {
        name: 'client_credencials',
        url: '/authorization/client-credencials',
        icon: 'cui-lock-locked'
      },
      {
        name: 'authorization_code',
        url: '/authorization/authorization-code',
        icon: 'cui-lock-locked'
      },




  /******************************  
   * Payment menu
   *****************************/
  {
    title: true,
    name: 'Payments'
  },
      {
        name: 'Iniciate payment',
        url: '/api/iniciate-payment',
        icon: 'cui-dollar'
      }, 
/*
      {
        name: 'Bulk payments',
        url: '/api/bulk-payments',
        icon: 'cui-dollar',
        badge: {
          variant: 'info badge-pill',
          text: 'NEW'
        }
      }, 
      {
        name: 'Payment info',
        url: '/api/payment-info',
        icon: 'cui-dollar'
      },
      {
        name: 'Payment ini status',
        url: '/api/payment-ini-status',
        icon: 'cui-dollar'
      },
      {
        name: 'Funds Confirmation',
        url: '/api/funds-confirmation',
        icon: 'cui-dollar'
      },
*/
      {
        name: 'Payment confirmation',
        url: '/api/payment-confirmation',
        icon: 'cui-dollar'
      },



  /******************************  
   * Payment menu
   *****************************/
  {
    title: true,
    name: 'Accounts'
  },
      {
        name: 'Accounts',
        url: '/api/accounts',
        icon: 'cui-credit-card'
      },
      {
        name: 'Banlance',
        url: '/api/balance',
        icon: 'cui-credit-card'
      },
      {
        name: 'Transactions',
        url: '/api/tranzactions',
        icon: 'cui-credit-card'
      },








  /******************************  
   * starts theme demo styeles
   *******************************/
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Styles',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Colors',
        url: '/theme/colors',
        icon: 'icon-drop'
      },
      {
        name: 'Typography',
        url: '/theme/typography',
        icon: 'icon-pencil'
      },
      {
        title: true,
        name: 'Components'
      },
      {
        name: 'Base',
        url: '/base',
        icon: 'icon-puzzle',
        children: [

          {
            name: 'Cards',
            url: '/base/cards',
            icon: 'icon-puzzle'
          },
          {
            name: 'Carousels',
            url: '/base/carousels',
            icon: 'icon-puzzle'
          },
          {
            name: 'Collapses',
            url: '/base/collapses',
            icon: 'icon-puzzle'
          },
          {
            name: 'Forms',
            url: '/base/forms',
            icon: 'icon-puzzle'
          },
          {
            name: 'Pagination',
            url: '/base/paginations',
            icon: 'icon-puzzle'
          },
          {
            name: 'Popovers',
            url: '/base/popovers',
            icon: 'icon-puzzle'
          },
          {
            name: 'Progress',
            url: '/base/progress',
            icon: 'icon-puzzle'
          },
          {
            name: 'Switches',
            url: '/base/switches',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tables',
            url: '/base/tables',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tabs',
            url: '/base/tabs',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tooltips',
            url: '/base/tooltips',
            icon: 'icon-puzzle'
          }
        ]
      },
      {
        name: 'Buttons',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Buttons',
            url: '/buttons/buttons',
            icon: 'icon-cursor'
          },
          {
            name: 'Dropdowns',
            url: '/buttons/dropdowns',
            icon: 'icon-cursor'
          },
          {
            name: 'Brand Buttons',
            url: '/buttons/brand-buttons',
            icon: 'icon-cursor'
          }
        ]
      },
      {
        name: 'Charts',
        url: '/charts',
        icon: 'icon-pie-chart'
      },
      {
        name: 'Icons',
        url: '/icons',
        icon: 'icon-star',
        children: [
          {
            name: 'CoreUI Icons',
            url: '/icons/coreui-icons',
            icon: 'icon-star',
            badge: {
              variant: 'success',
              text: 'NEW'
            }
          },
          {
            name: 'Flags',
            url: '/icons/flags',
            icon: 'icon-star'
          },
          {
            name: 'Font Awesome',
            url: '/icons/font-awesome',
            icon: 'icon-star',
            badge: {
              variant: 'secondary',
              text: '4.7'
            }
          },
          {
            name: 'Simple Line Icons',
            url: '/icons/simple-line-icons',
            icon: 'icon-star'
          }
        ]
      },
      {
        name: 'Notifications',
        url: '/notifications',
        icon: 'icon-bell',
        children: [
          {
            name: 'Alerts',
            url: '/notifications/alerts',
            icon: 'icon-bell'
          },
          {
            name: 'Badges',
            url: '/notifications/badges',
            icon: 'icon-bell'
          },
          {
            name: 'Modals',
            url: '/notifications/modals',
            icon: 'icon-bell'
          }
        ]
      },
      {
        name: 'Widgets',
        url: '/widgets',
        icon: 'icon-calculator',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      },
      {
        divider: true
      },
      {
        title: true,
        name: 'Extras',
      },
      {
        name: 'Pages',
        url: '/pages',
        icon: 'icon-star',
        children: [
          {
            name: 'Login',
            url: '/login',
            icon: 'icon-star'
          },
          {
            name: 'Register',
            url: '/register',
            icon: 'icon-star'
          },
          {
            name: 'Error 404',
            url: '/404',
            icon: 'icon-star'
          },
          {
            name: 'Error 500',
            url: '/500',
            icon: 'icon-star'
          }
        ]
      },
      {
        name: 'Disabled',
        url: '/dashboard',
        icon: 'icon-ban',
        badge: {
          variant: 'secondary',
          text: 'NEW'
        },
        attributes: { disabled: true },
      },
    ]
  },


/*
  {
    name: 'Solicitar Acceso PRO',
    url: 'https://www.loycus.com/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
*/
/******************************
 * end theme demo styles
 ******************************/



  {
    name: 'Solicitar Acceso PRO',
    url: 'https://www.loycus.com/',
    icon: 'icon-layers',
    class: 'mt-auto',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];

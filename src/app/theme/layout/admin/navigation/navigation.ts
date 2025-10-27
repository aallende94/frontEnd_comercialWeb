import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string | any;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {

    children: [

      {
        id: 'page-layouts',
        title: 'Page Layouts',
        type: 'collapse',
        icon: 'feather icon-layout',
        children: [
          {
            id: 'vertical',
            title: 'Vertical',
            type: 'item',
            url: '/layout/static',
            target: true
          },
          {
            id: 'horizontal',
            title: 'Horizontal',
            type: 'item',
            url: '/layout/horizontal',
            target: true
          }
        ]
      }
    ]
  },
  { 
    id: 'clientes',
    title: 'CLIENTES',
    type: 'collapse',
    icon: 'feather icon-users',
    children: [
      {
        id: 'form_cli-clientes',
        title: 'Registrar Clientes',
        type: 'item',
        url: '/clientes/registrar',
        classes: 'nav-item',
        icon: 'feather icon-user-plus'
      },
      { 
        id: 'form_cli-clientes',
        title: 'Listar Clientes',
        type: 'item',
        url: '/clientes/listar',
        class: 'nav-item',
        icon: 'feather icon-list'
      }
    ]
  },
  { 
    id: 'productos',
    title: 'PRODUCTOS',
    type: 'collapse',
    icon: 'feather icon-file-plus',
    children: [
      {
        id: 'form_prod-productos',
        title: 'Registrar Productos',
        type: 'item',
        url: '/productos/registrar',
        classes: 'nav-item',
        icon: 'feather icon-file-plus'
      },
      {
        id: 'form_prod-productos',
        title: 'Listar Productos',
        type: 'item',
        url: '/productos/listar',
        classes: 'nav-item',
        icon: 'feather icon-list'
      }
    ]
   },
  // { 
  //   id: 'productos',
  //   title: 'PROVEEDORES',
  //   type: 'collapse',
  //   icon: 'fa fa-truck',
  //   children: [
  //     {
  //       id: 'form_prod-productos',
  //       title: 'Registrar Proveedores',
  //       type: 'item',
  //       //url: '/productos/registrar',
  //       classes: 'nav-item',
  //       icon: 'feather icon-file-plus'
  //     },
  //     {
  //       id: 'form_prod-productos',
  //       title: 'Listar Proveedores',
  //       type: 'item',
  //      // url: '/productos/listar',
  //       classes: 'nav-item',
  //       icon: 'feather icon-list'
  //     }
  //   ]
  // },
  { 
    id: 'aperturaCierreCaja',
    title: 'APERTURA/CIERRE DE CAJA',
    type: 'collapse',
    icon: 'feather icon-inbox',
    children: [
      {
        id: 'form_apertura_cierre_caja',
        title: 'Apertura de Caja',
        type: 'item',
        url: '/aperturaCierreCaja/aperturaCaja',
        classes: 'nav-item',
        icon: 'feather icon-unlock'
      },
      {
        id: 'form_apertura_cierre_caja',
        title: 'Cierre de Caja',
        type: 'item',
        url: '/aperturaCierreCaja/cierreCaja',
        classes: 'nav-item',
        icon: 'feather icon-lock'
      },
      {
        id: 'form_apertura_cierre_caja',
        title: 'Estado de Caja',
        type: 'item',
        url: '/aperturaCierreCaja/estadoCaja',
        classes: 'nav-item',
        icon: 'feather icon-check-circle'
      }
    ]
   },
  { 
    id: 'ventas',
    title: 'VENTAS',
    type: 'collapse',
    icon: 'feather icon-shopping-cart',
    children: [
      {
        id: 'form_ventas',
        title: 'Facturación Ventas',
        type: 'item',
         url: '/ventas/registrar',
        classes: 'nav-item',
        icon: 'feather icon-shopping-cart'
      }
    ]
  },
  { 
    id: 'ventas',
    title: 'COMPRAS',
    type: 'collapse',
    icon: 'feather icon-package',
    children: [
      {
        id: 'form_ventas',
        title: 'Facturación Compras',
        type: 'item',
         url: '/ventas/registrar',
        classes: 'nav-item',
        icon: 'feather icon-package'
      }
    ]
  },
  { 
    id: 'inventarios',
    title: 'CONTROL STOCK',
    type: 'collapse',
    icon: 'feather icon-grid',
    children: [
      {
        id: 'form_inventariosVentas',
        title: 'Control de Stock',
        type: 'item',
        url: '/inventariosVentas/registrar',
        classes: 'nav-item',
        icon: 'feather icon-grid'
      }
    ]
  },
  //   { 
  //   id: 'productos',
  //   title: 'USUARIOS',
  //   type: 'collapse',
  //   icon: 'feather icon-users',
  //   children: [
  //     {
  //       id: 'form_prod-productos',
  //       title: 'Registrar Usuarios',
  //       type: 'item',
  //      // url: '/productos/registrar',
  //       classes: 'nav-item',
  //       icon: 'feather icon-file-plus'
  //     },
  //     {
  //       id: 'form_prod-productos',
  //       title: 'Listar Usuarios',
  //       type: 'item',
  //      // url: '/productos/listar',
  //       classes: 'nav-item',
  //       icon: 'feather icon-list'
  //     }
  //   ]
  // },


];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}

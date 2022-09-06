import { Home } from '../Pages/Home/index';
import { Login } from '../Pages/Auth/login';
import { Products } from '../Pages/Products/index';
import { Promotions } from '../Pages/Promociones/index';
import { Registro } from '../Pages/Auth/registro';
import { ProductoView } from '../Components/Producto/ProductoView';
import { lazy,LazyExoticComponent } from 'react';

type JSXComponent=()=>JSX.Element;

export interface Route{
    to:string;
    path:string;
    Component:LazyExoticComponent<JSXComponent>|JSXComponent;
    name:string;
}
const lazyProducto= lazy(()=>import(/* webpackChuckName:"Lazy Loading producto" */'../Components/Producto/ProductoView'));
const lazyHome= lazy(()=>import(/* webpackChuckName:"Lazy Loading home" */'../Pages/Home/index'))
const lazyPromociones= lazy(()=>import(/* webpackChuckName:"Lazy Loading promociones" */'../Pages/Promociones/index'));
export const routes:Route[]=[
    {
        path:"Bienvenido",
        to:"/Bienvenido",
        Component:lazyHome,
        name:"Bienvenido"
    },
    {
        path:"promociones",
        to:"/promociones",
        Component:lazyPromociones,
        name:"Promociones"
    },
    {
        path:"productos",
        to:"/productos",
        Component:Products,
        name:"Productos"
    },
    {
        path:"registro",
        to:"/registro",
        Component:Registro,
        name:"Registros"
    },
    {
        path:"detalle",
        to:"/detalle",
        Component:lazyProducto,
        name:"detalle"
    },
    
    /*autenticado */
    /* {
        path:"login",
        to:"/login",
        Component:Login,
        name:"login"
    }, */
]
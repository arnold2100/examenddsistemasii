import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProductoComponent } from "src/app/components/producto/producto.component";
import {  RouterModule } from '@angular/router';
import { ProductonuevoComponent } from "src/app/components/producto/productonuevo/productonuevo.component";
import { PedidoComponent } from "src/app/components/pedido/pedido.component";
import { MotoComponent } from "src/app/components/moto/moto.component";
import { MotonuevoComponent } from "src/app/components/moto/motonuevo/motonuevo.component";
import { UsuarioComponent } from "src/app/components/usuario/usuario.component";
import { UsuarionuevoComponent } from "src/app/components/usuario/usuarionuevo/usuarionuevo.component";
//export 
const AdminLayoutRoutes:Routes=[
    {
        path:'producto',
        component:ProductoComponent
    },
    {
        path:'productoform',
        component:ProductonuevoComponent
    },
    {
        path:'productoform/:id',
        component:ProductonuevoComponent
    },
    {
        path:'pedidoss',
        component:PedidoComponent
    },
    {
        path:'moto',
        component:MotoComponent
    },
    {
        path:'motoform',
        component:MotonuevoComponent
    },
    {
        path:'motoform/:id',
        component:MotonuevoComponent
    },
    {
        path:'usuario',
        component:UsuarioComponent
    },
    {
        path:'usuarioform',
        component:UsuarionuevoComponent
    },
    {
        path:'usuarioform/:id',
        component:UsuarionuevoComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutesR{}
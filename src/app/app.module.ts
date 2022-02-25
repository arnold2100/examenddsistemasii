import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from  '@angular/fire';
import { AngularFirestoreModule } from  '@angular/fire/firestore';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { ProductonuevoComponent } from './components/producto/productonuevo/productonuevo.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PedidoComponent } from './components/pedido/pedido.component';
import { MotoComponent } from './components/moto/moto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { MotonuevoComponent } from './components/moto/motonuevo/motonuevo.component';
import { UsuarionuevoComponent } from './components/usuario/usuarionuevo/usuarionuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductonuevoComponent,
    PedidoComponent,
    MotoComponent,
    UsuarioComponent,
    MotonuevoComponent,
    UsuarionuevoComponent,
  ],
  imports: [
    BrowserModule,
    //AdminLayoutmodule, 
    SweetAlert2Module,  
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig ),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

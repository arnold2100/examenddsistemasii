import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/model/moto';
import { MotoService } from 'src/app/services/moto.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {

  lista:Moto[] = [];
  constructor(private Moto:MotoService ) { }
  search:String='';
  ngOnInit(): void {
    console.log("iniciado consulta");
    this.Moto.getAll().snapshotChanges().subscribe(
      serve=>{
        this.lista=
        serve.map(item=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              chofer:item.payload.doc.data().chofer,
              horario:item.payload.doc.data().horario,
              marca:item.payload.doc.data().marca,
              placa:item.payload.doc.data().placa
            }
          );

        })
        console.log("Datos del servidor firebase",this.lista);
      }
    )
  }
  borrar($event:any,prod:Moto){
    $event.preventDefault();
    Swal.fire({
      title: 'Esta seguro de Borrar?',
      text: "Se perdera definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Moto.delete((String)(prod.key));
        Swal.fire(
          'Borrado!',
          'Su item fue borrardo.',
          'success'
        )
      }
    })
  }
  buscar(){
    this.Moto.search(this.search).snapshotChanges()
      .subscribe(serve=>{
        this.lista=
        serve.map((item:any)=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              chofer:item.payload.doc.data().chofer,
              horario:item.payload.doc.data().horario,
              marca:item.payload.doc.data().marca,
              placa:item.payload.doc.data().placa
            }
          );

        })
      });
  }

}


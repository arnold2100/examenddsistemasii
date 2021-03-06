import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moto } from 'src/app/model/moto';
import { MotoService } from 'src/app/services/moto.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-motonuevo',
  templateUrl: './motonuevo.component.html',
  styleUrls: ['./motonuevo.component.css']
})
export class MotonuevoComponent implements OnInit {
  item:Moto=new Moto();
  seccion='moto';
  edit:boolean=false;
  constructor(private dbProd:MotoService,
      private router:Router,
      private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      if(params.id){
        this.edit=true;
        this.item.key=params.id
        this.dbProd.getItem(params.id).snapshotChanges().subscribe(a=>{
          console.log(a.payload.data());
          let prod:any;
          prod=a.payload.data();
          this.item= Object.assign(
            { 
              key:a.payload.id,
              chofer:prod.chofer,
              horario:prod.horario,
              marca:prod.marca,
              placa:prod.placa
            }
          );
        });
        //editar producto
      }else
      {
        this.edit=false;
        console.log("nuevo!!!!")
        //nuevo producto
      }
    });
  }
  enviar(){
    if(this.edit){
      this.dbProd.edit((String)(this.item.key),this.item);
    }else{

      this.dbProd.add(this.item).then(a=>{
        console.log("datos server",a);
      });
    }
    Swal.fire({ title: 'Datos guardados',
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {}
        this.router.navigate(['/'+this.seccion]);
    });
    
  } 
  salir(){}
}

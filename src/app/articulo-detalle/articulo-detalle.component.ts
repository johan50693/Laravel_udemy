import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {

  constructor(private ruta:ActivatedRoute) { }
  
  nombre: string;
  descripcion: string;
  precio: number;

  ngOnInit() {
    this.nombre= this.ruta.snapshot.params.nombre;
    this.descripcion= this.ruta.snapshot.params.descripcion;
    this.precio= this.ruta.snapshot.params.precio;
    // console.log(this.ruta.snapshot.params.nombre);
  }

}

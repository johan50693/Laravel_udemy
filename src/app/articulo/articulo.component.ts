import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo>= new Array<Articulo>();
  constructor(private ruta:Router) { }

  ngOnInit() {
    this.articulos.push(
      {nombre: 'Tablet Lenovo', descripcion: '10 pulgadas quad-core', stock: 50, precio: 150, precioMayorista: 100 },
      {nombre: 'Laptop Lenovo', descripcion: '14 pulgadas, i-7, 4GB Ram, 1TB', stock: 25, precio: 500, precioMayorista: 450 },
      {nombre: 'Monitor Lenovo', descripcion: '24 pulgadas, HDMI,VGA, HD', stock: 70, precio: 250, precioMayorista: 200 },
    );
    console.log(this.articulos);
  }

  pasarParametro(articuloRecibido: Articulo){
    // console.log(articuloRecibido);
    this.ruta.navigate(['articuloDetalle', {articulo: JSON.stringify(articuloRecibido)}]);
  }

}

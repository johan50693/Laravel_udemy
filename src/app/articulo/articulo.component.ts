import { Component, OnInit } from '@angular/core';

interface Articulo{
  nombre: string,
  descripcion: string,
  precio: number
}

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo>= new Array<Articulo>();
  constructor() { }

  ngOnInit() {
    this.articulos.push(
      {nombre: 'Tablet Lenovo', descripcion: '10 pulgadas quad-core', precio: 150 },
      {nombre: 'Laptop Lenovo', descripcion: '14 pulgadas, i-7, 4GB Ram, 1TB', precio: 500 },
      {nombre: 'Monitor Lenovo', descripcion: '24 pulgadas, HDMI,VGA, HD', precio: 250 },
    );
    console.log(this.articulos);
  }

}

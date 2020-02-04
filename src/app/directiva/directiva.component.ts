import { Component, OnInit } from '@angular/core';

interface Producto{
  nombre:string;
  stock:number;
  fabricante:string;
  fechaVence:Date;
  esImportante: Boolean;
  textoGrande: Boolean;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

	cargando:boolean =true;
	nombres: Array<string>= ["Juan","Pedro","María","Juana","Pablo","Marta"];
  pestana: string='';
  mostrarCuadrado : boolean=false;
  productos: Array<Producto>=[
    {
      nombre: 'Laptop',
      stock:20,
      fabricante: 'HP',
      fechaVence: new Date('04/19/2020'),
      esImportante:true,
      textoGrande:false,
    },
    {
      nombre: 'Redmi 7',
      stock:10,
      fabricante: 'Xiaomi',
      fechaVence: new Date('01/19/2020'),
      esImportante:false,
      textoGrande:true,
    },
    {
      nombre: 'Mouse',
      stock:70,
      fabricante: 'Genius',
      fechaVence: new Date('10/05/2025'),
      esImportante:true,
      textoGrande:false,
    },
  ];

  constructor() { }

  ngOnInit() {
  	setTimeout(() => {
  		this.cargando=false;
  	},5000);
  }

  alterLoading(){
  	this.cargando=!this.cargando;
  }
  cambiarPestana(pestana: string){
    this.pestana=pestana;
  }

  alterFondo(){
  	this.mostrarCuadrado=!this.mostrarCuadrado;
  }

}

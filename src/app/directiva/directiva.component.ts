import { Component, OnInit } from '@angular/core';

interface Producto{
	
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

	cargando:boolean =true;
	nombres: Array<string>= ["Juan","Pedro","María","Juana","Pablo","Marta"];


  constructor() { }

  ngOnInit() {
  	setTimeout(() => {
  		this.cargando=false;
  	},5000);
  }

  alterLoading(){
  	this.cargando=!this.cargando;
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {
  nombre:string= "María";
  inputContent:string="Enviando valor de prueba";

  correo:string='';
  password:string='';

  constructor() { }

  ngOnInit() {
  }

  ingresar(){
    console.log(this.password);
    console.log(this.correo);
  }

  escribirModelo(){
    console.log(this.password);
  }

  escribirInput(event){
    console.log(event);
  }

}

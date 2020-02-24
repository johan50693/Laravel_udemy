import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  titulo: string= 'Este es el título';
  dinero: number= 2400;
  ganancias: number=0.54;
  fechaNacimiento: Date= new Date('06-5-2018');
  textolargo: string='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, est doloremque. Nihil, quibusdam reprehenderit. Dicta, aliquam deleniti adipisci omnis magnam ex voluptatibus rerum minima, modi cumque aliquid soluta perferendis velit.';
  
  constructor() { }

  ngOnInit() {
  }

}

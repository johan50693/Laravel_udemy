import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentLarge'
})
export class ContentLargePipe implements PipeTransform {

  transform(valor: string): string {
    
    if(valor.toString().length > 140 ){
      valor= valor.substr(0,150);
    }
    valor = valor + 'Continuara...';
    return valor;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  hereoBorrado:string='';

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];

  borrarHeroe(){

    this.hereoBorrado = this.heroes.shift()||'';
  }


}

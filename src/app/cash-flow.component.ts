/** 1 función para decorar componentes */
import { Component } from '@angular/core';


/** 2 uso de la función decoradora para registrar el componente */
@Component({
  moduleId: module.id,
  selector: 'cash-flow-app',
  templateUrl: 'cash-flow.component.html',
  styleUrls: ['cash-flow.component.css']
})

  
/** 3 definción del componente
 * es una clase ES6, equivalente a una función controller ES5
 * sus propiedades y métodos son accesibles a la vista
 *  */  
export class CashFlowAppComponent {
  title = 'cash-flow works!';
}

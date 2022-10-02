import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from './producto';

@Pipe({
  name: 'productoFilter'
})
//Se crea un filtro donde se va a buscar en un arreglo, el signo de pregunta es como un IF
export class ProductoFilterPipe implements PipeTransform {

  transform(value: Producto[], args: string): Producto[] {
    let filter:string = args ? args.toLocaleLowerCase() : null;

    return filter ? value.filter((product:Producto)=>
    product.productName.toLocaleLowerCase().indexOf(filter)!= -1):value;

  }

}
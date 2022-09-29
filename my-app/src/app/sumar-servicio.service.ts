import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumarServicioService {

  precioTotal: number = 0;
  
  subPrecio: number = 0;


  agregarPrecio(numProduct: number) {
    this.precioTotal = 0;

    this.precioTotal = this.subPrecio + (30 * numProduct)


  }

  actualizarSubTotal(cantSubPrecio: number) {

    this.subPrecio = this.subPrecio + cantSubPrecio;
    this.precioTotal = this.subPrecio;

  }

  constructor() { 

  }
}

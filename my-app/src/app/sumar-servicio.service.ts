import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumarServicioService {

  precioTotal: number = 0;
  
  subPrecio: number = 0;

  subPPagina: number = 0;

  subPIdioma: number = 0;

  inputSubprecio: boolean = false;

  agregarPrecio(numProduct: number,tipo: string) {
    if(numProduct < 0){
    return;
    }
    else{
      if(tipo == "pagina"){
  
        this.subPPagina = 0;
    
        this.subPPagina =  30 * numProduct;
    
        this.actualizarTotal();
      }
      
      else{
        this.subPIdioma = 0;
    
        this.subPIdioma =  30 * numProduct;
    
        this.actualizarTotal();
  
      }
    }
  }

  actualizarTotal() {
    this.precioTotal = 0;
    this.precioTotal = this.subPPagina + this.subPIdioma + this.subPrecio; 
  }

  constructor() { 

  }
}

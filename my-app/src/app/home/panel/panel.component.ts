import { Component, Input, OnInit } from '@angular/core';
import { SumarServicioService } from '../../sumar-servicio.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  cantPaginas: number = 0;
  cantIdiomas: number = 0;

  sumPrecio(numProduct: number, tipo: string) {
    this.sumar.agregarPrecio(numProduct,tipo)
    console.log("sumPrecio", this.sumar.precioTotal)
  }

  constructor(private sumar:SumarServicioService) { 

  

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SumarServicioService } from '../sumar-servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  valor: boolean = false;

  precioFinal: number = this.sumarServicio.precioTotal;

  calcularServicios(event:Event,value:number) {

    if((<HTMLInputElement>event.target).value == "false"){
      this.sumarServicio.subPrecio +=value;
      (<HTMLInputElement>event.target).value = "true";
      console.log(this.precioFinal);
      this.sumarServicio.actualizarTotal();
    }
    else {
      this.sumarServicio.subPrecio -=value;
      (<HTMLInputElement>event.target).value = "false";
      console.log(this.precioFinal);
      this.sumarServicio.actualizarTotal();
    }
  }

  mostrarPanel(event:Event){

    if((<HTMLInputElement>event.target).value == "false"){
      this.valor = false;
    }
    else {
      this.valor = true;
      
    }

  }

  constructor(public sumarServicio:SumarServicioService) { 

    

  }

  ngOnInit(): void {
  }


}

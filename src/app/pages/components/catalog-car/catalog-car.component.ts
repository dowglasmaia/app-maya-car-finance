import { CardModel } from './../card-car/card-car.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-car',
  templateUrl: './catalog-car.component.html',
  styleUrls: ['./catalog-car.component.css']
})
export class CatalogCarComponent implements OnInit {

  constructor() { }

  ofertas: CardModel[] = [
    {
      modelo: "Peugout 208 1.5 ",
      valor: 20.095,
      valorParcelaMes: 500.79,
      quantidadeParcelas: 48,
      anoVeiculo: "2015",
      km: 80.00
    },
    {
      modelo: "Voyage 1.8 Flex",
      valor: 40.009,
      valorParcelaMes: 900.08,
      quantidadeParcelas: 48,
      anoVeiculo: "2019",
      km: 89.00
    }
  ];

  ngOnInit(): void {

  }

}

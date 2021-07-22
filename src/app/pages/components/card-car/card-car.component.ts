import { CardModel } from './card-car.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.css']
})
export class CardCarComponent implements OnInit {

  @Input() oferta!: CardModel;
  constructor() { }

  ngOnInit(): void {

  }

}

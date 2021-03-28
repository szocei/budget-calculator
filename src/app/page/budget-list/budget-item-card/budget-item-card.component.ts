import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BudgetItem } from '../../../model/budget-item';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item:BudgetItem=new BudgetItem();
  @Output() xButtonClick:EventEmitter<any>=new EventEmitter<any>();
@Output() cardClick: EventEmitter<any>=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
onXButtonClick(){
this.xButtonClick.emit();
}

onCardClick(){
  this.cardClick.emit();
}


}

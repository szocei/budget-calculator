import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../../model/budget-item';
import { UpdateEvent } from '../budget-list/budget-list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  budgetItems: BudgetItem[]=new Array<BudgetItem>();

totalBudget:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
 this.totalBudget += newItem.amount;
  }

  deleteItem(item:BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
     this.totalBudget -= item.amount;
  }
updateItem(updateEvent:UpdateEvent){
   this.budgetItems[this.budgetItems.indexOf(updateEvent.old)]=updateEvent.new;

this.totalBudget -=updateEvent.old.amount;
this.totalBudget +=updateEvent.new.amount;

  }


}

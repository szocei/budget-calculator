import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BudgetItem } from '../../model/budget-item';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})



export class BudgetListComponent implements OnInit {

@Input() budgetItems: BudgetItem[]=new Array();
@Output() delete:EventEmitter<BudgetItem>=new EventEmitter<BudgetItem>();
 @Output() update: EventEmitter<UpdateEvent>=new EventEmitter<UpdateEvent>();

constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  onDelete(item:BudgetItem){
    this.delete.emit(item);
  }

  onCardClicked(item:BudgetItem){
const dialogRef=this.dialog.open(EditItemModalComponent, {
  width:'80%',
  data: item
});
  
dialogRef.afterClosed().subscribe(result=>
  {
if(result){
 // this.budgetItems[this.budgetItems.indexOf(item)]=result;
this.update.emit({
  old:item,
  new:result
  });
  }
  })



}
}

export interface UpdateEvent{
  old: BudgetItem;
  new: BudgetItem;
}
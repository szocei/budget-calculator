import { Component, Inject,  OnInit } from '@angular/core';
import { BudgetItem } from '../../model/budget-item';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.css']
})
export class EditItemModalComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item:BudgetItem
  ) { }

  ngOnInit(): void {
  }

onSubmitted(updateItem:BudgetItem){
  this.dialogRef.close(updateItem);
}


}

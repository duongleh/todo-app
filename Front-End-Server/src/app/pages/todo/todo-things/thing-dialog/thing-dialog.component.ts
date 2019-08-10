import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodoThingsComponent } from '../todo-things.component';
export interface DialogData {
  content: string;
}

@Component({
  selector: 'app-thing-dialog',
  templateUrl: './thing-dialog.component.html',
  styleUrls: ['./thing-dialog.component.scss']
})
export class ThingDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TodoThingsComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

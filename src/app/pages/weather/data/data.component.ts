import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  constructor(
    public dialogRef: MatDialogRef<DataComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
}
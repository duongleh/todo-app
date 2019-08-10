import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent {
  constructor(
    public dialogRef: MatDialogRef<WeatherDataComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
}

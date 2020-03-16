import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  center: google.maps.LatLngLiteral;
  zoom = 10;
  markerPositions: google.maps.LatLngLiteral[] = [];
  infoContent = '';

  constructor(
    public dialogRef: MatDialogRef<DataComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.center = { lat: data.lat, lng: data.lng };
    this.markerPositions.push(this.center);
    this.infoContent = data.cityName;
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }
}
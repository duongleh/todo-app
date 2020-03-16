import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { DataComponent } from './data/data.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [WeatherComponent, DataComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    GoogleMapsModule
  ],
  entryComponents: [
    DataComponent
  ],
})
export class WeatherModule { }

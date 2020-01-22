import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Constants } from '../../shared/constant';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { DataComponent } from './data/data.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatDialogModule
} from "@angular/material";
import { AgmCoreModule } from '@agm/core';

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
    AgmCoreModule.forRoot({
      apiKey: Constants.apiKey
    })
  ],
  entryComponents: [
    DataComponent
  ],
})
export class WeatherModule { }

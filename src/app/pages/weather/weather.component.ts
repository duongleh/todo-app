import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { WeatherService } from '../../shared/services/weather/weather.service';
import { MatDialog } from '@angular/material/dialog';
import { DataComponent } from './data/data.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  public formWeather: FormGroup;
  public temp: number;
  public isLoading = false;
  public cityName = '';
  public notification = '';

  getTemp(formDirective: FormGroupDirective) {
    this.notification = '';
    this.isLoading = true;
    this.getTempService.getTemp(this.formWeather.value.city)
      .subscribe((data: any) => {
        if (data.list.length === 0) { this.notification = `Cannot find ${this.formWeather.value.city}`; } else {
          this.openDialog(`${data.list[0].name}, ${data.list[0].sys.country}`,
            data.list[0].main.temp, data.list[0].coord.lat, data.list[0].coord.lon, formDirective);
        }
        this.isLoading = false;
      },
        (error) => {
          this.isLoading = false;
          formDirective.resetForm();
          this.formWeather.reset();
        },
        () => { }
      );
  }

  getErrorMessage(field: string) {
    return this.formWeather.controls[field].errors.required ? 'You must enter a value' : '';
  }

  openDialog(cityName: string, temp: number, lat: number, lng: number, formDirective: FormGroupDirective): void {
    const dialogRef = this.dialog.open(DataComponent, {
      data: { cityName, temp, lat, lng }
    });

    dialogRef.afterClosed().subscribe(result => {
      formDirective.resetForm();
      this.formWeather.reset();
    });
  }

  constructor(private fb: FormBuilder, private getTempService: WeatherService, public dialog: MatDialog) { }

  ngOnInit() {
    this.formWeather = this.fb.group({
      city: ['', [Validators.required]],
    });
  }

}

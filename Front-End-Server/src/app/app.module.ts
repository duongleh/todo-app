import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { NgxCaptchaModule } from 'ngx-captcha';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatInputModule,
  MatMenuModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatCardModule,
  MatTabsModule,
  MatDialogModule,
  MatExpansionModule,
  MatDividerModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { Constants } from './common/constant';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './pages/user/user.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoThingsComponent } from './pages/todo/todo-things/todo-things.component';
import { ThingDialogComponent } from './pages/todo/todo-things/thing-dialog/thing-dialog.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { WeatherDataComponent } from './pages/weather/weather-data/weather-data.component';
import { NewsComponent } from './pages/news/news.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoadingComponent } from './common/modules/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TodoComponent,
    TodoThingsComponent,
    ThingDialogComponent,
    WeatherComponent,
    WeatherDataComponent,
    NewsComponent,
    PageNotFoundComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDialogModule,
    NgxCaptchaModule,
    MatExpansionModule,
    MatDividerModule,
    AgmCoreModule.forRoot({
      apiKey: Constants.apiKey
    })
  ],
  providers: [],
  entryComponents: [
    WeatherDataComponent,
    ThingDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

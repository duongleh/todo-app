import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './pages/todo/todo.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { UserComponent } from './pages/user/user.component';
import { NewsComponent } from './pages/news/news.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from './authGuard/auth.guard';
import { NegateAuthGuard } from './authGuard/negate-auth.guard';

const routesConfig: Routes = [
  { path: 'user', component: UserComponent, canActivate: [NegateAuthGuard] },
  { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] },
  { path: 'weather', component: WeatherComponent, canActivate: [AuthGuard] },
  { path: 'news', component: NewsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

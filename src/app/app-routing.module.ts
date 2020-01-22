import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { NegateAuthGuard } from './auth/negate-auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(module => module.UserModule),
    canActivate: [NegateAuthGuard]

  },
  {
    path: 'todo',
    loadChildren: () => import('./pages/todo/todo.module').then(module => module.TodoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'weather',
    loadChildren: () => import('./pages/weather/weather.module').then(module => module.WeatherModule),
    canActivate: [AuthGuard]

  },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }


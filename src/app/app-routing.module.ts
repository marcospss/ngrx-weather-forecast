import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '@core/containers/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/current-wheater', pathMatch: 'full' },
  {
    path: 'current-wheater',
    loadChildren: '@wheather/wheather.module#WheatherModule',
    // canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

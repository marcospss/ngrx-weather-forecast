import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentComponent } from '@wheather/containers/current/current.component';
import { ViewLocationPageComponent } from '@wheather/containers/view-location-page/view-location-page.component';

const routes: Routes = [
  { path: '', component: CurrentComponent },
  {
    path: ':id',
    component: ViewLocationPageComponent
    // canActivate: [BookExistsGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WheatherRoutingModule {}

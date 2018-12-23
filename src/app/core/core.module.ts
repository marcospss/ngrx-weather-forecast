import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RootComponent } from './containers/root/root.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { LoadingAnimationComponent } from './components/loading-animation/loading-animation.component';

import { WeatherService } from './services/weather.service';
import { LoadingService } from './services/loading.service';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

export const COMPONENTS = [
  RootComponent,
  NotFoundPageComponent,
  LoadingAnimationComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    WeatherService,
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}

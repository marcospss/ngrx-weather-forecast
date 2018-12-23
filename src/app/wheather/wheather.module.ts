import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { WheatherRoutingModule } from './wheather-routing.module';
import { reducers } from './reducers';
import { WeatherEffects } from './effects/weather.effects';
import { CurrentComponent } from './containers/current/current.component';
import { LocationSearchComponent } from './components/location-search/location-search.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ViewLocationPageComponent } from './containers/view-location-page/view-location-page.component';
import { SelectedLocationPageComponent } from './containers/selected-location-page/selected-location-page.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';

@NgModule({
  imports: [
    CommonModule,
    WheatherRoutingModule,
    StoreModule.forFeature('wheather', reducers),
    EffectsModule.forFeature([WeatherEffects])
  ],
  declarations: [
    CurrentComponent,
    LocationSearchComponent,
    CurrentWeatherComponent,
    ViewLocationPageComponent,
    SelectedLocationPageComponent,
    LocationDetailComponent
  ]
})
export class WheatherModule { }

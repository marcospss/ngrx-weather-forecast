import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromLocations from './../../reducers';
import { ViewLocationPageActions } from './../../actions';

@Component({
  selector: 'mps-view-location-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mps-selected-location-page></mps-selected-location-page>`
})
export class ViewLocationPageComponent implements OnDestroy {
  actionsSubscription: Subscription;

  constructor(store: Store<fromLocations.State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .pipe(
        map(params => new ViewLocationPageActions.SelectLocation(params.id))
      )
      .subscribe(store);
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}

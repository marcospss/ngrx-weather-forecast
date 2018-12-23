import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromSearch from './../../reducers';
import { FindLocationWheatherActions } from './../../actions';
@Component({
  selector: 'mps-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentComponent implements OnInit {
  locations$: Observable<any[]>;
  constructor(private store: Store<fromSearch.State>) {
    this.locations$ = store.pipe(select(fromSearch.getSearchLocations));
  }

  ngOnInit() {}

  searchLocation(query: string) {
    this.store.dispatch(new FindLocationWheatherActions.SearchLocations(query));
  }

  addLocation(location: string) {
    console.log(location);
  }

  removeLocation(location: string) {
    console.log(location);
  }
}

import { Component } from '@angular/core';
import {catchError, map, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiLoaded: Observable<boolean>;
  title = 'yoga-home';


  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyBMV0h2icKO2DcFhVHdPLZ5Sgkws5wxcEU',
        'initMap'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }
}

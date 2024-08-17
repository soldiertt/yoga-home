import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: google.maps.MapOptions = {
    center: {lat: 50.52908, lng: 3.23363},
    zoom: 12
  };
  title = 'yoga-home';
}

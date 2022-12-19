import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import * as Map from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}
  @ViewChild('map') mapElement: ElementRef | undefined;
  // map: Map.Map;
  map: any;
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);

      this.map = Map.map('map').setView([latitude, longitude], 13);

      Map.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap',
      }).addTo(this.map);

      var marker = Map.marker([latitude, longitude]).addTo(this.map);
      // let mapMarkers1 = [];

      document.addEventListener('click', (e) => {});
    });
  }

  readLocation() {
    let array = [
      {
        latitude: 28.66,
        longitude: 77.23,
      },
      {
        latitude: 18.9667,
        longitude: 72.8333,
      },
      {
        latitude: 22.5411,
        longitude: 88.3378,
      },
      {
        latitude: 12.9699,
        longitude: 77.598,
      },
    ];
    var interval = 5000; // how much time should the delay between two iterations be (in milliseconds)?
    var promise = Promise.resolve();
    array.forEach((el) => {
      promise = promise.then(() => {
        this.map.remove();
        this.map = Map.map('map').setView([el.latitude, el.longitude], 13);
        Map.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap',
        }).addTo(this.map);
        var marker = Map.marker([el.latitude, el.longitude]).addTo(this.map);
        console.log(el.latitude, el.longitude);
        return new Promise((resolve) => {
          setTimeout(resolve, interval);
        });
      });
    });

    promise.then(() => {
      console.log('Loop finished.');
    });
  }

  watchPosition(): void {
    let watchid = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        console.log(`lat: ${latitude}, lon: ${longitude}`);
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0,
      }
    );
  }
}

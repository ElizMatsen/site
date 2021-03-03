import {Component, OnInit} from '@angular/core';
import {icon, latLng, MapOptions, Marker, tileLayer} from 'leaflet';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  mapOptions: MapOptions;

  private initializeMapOptions(): void {
    this.mapOptions = {
      center: latLng([40.730610, -73.935242]),
      zoom: 12,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
          })
      ],
    };
  }

  private addSampleMarker(): void {
    const marker = new Marker([40.730610, -73.935242])
      .setIcon(
        icon({
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          iconUrl: 'assets/img/icon/location.svg'
        }));
  }

  constructor() {
  }

  ngOnInit(): void {
    this.initializeMapOptions();
  }

}


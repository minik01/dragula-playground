import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {alabamaFeature, pointFeature} from './map-data/GeoJson';
import {GeoJSON, Map as LeafletMap, TileLayer} from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @Input() lng = 21.37;
  @Input() lat = 21.37;
  private map: LeafletMap;
  @ViewChild('map') mapElement: ElementRef;

  private initMap(): void {
    this.map = new LeafletMap(this.mapElement.nativeElement, {
      center: [this.lat, this.lng],
      zoom: 1,
      dragging: false
    });
    const tiles = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const myLayer = new GeoJSON().addTo(this.map);
    myLayer.addData(pointFeature);
    // myLayer.setStyle({style: stateStyle});

    const alabama = new GeoJSON(alabamaFeature).addTo(myLayer);
    const point = new GeoJSON(pointFeature).addTo(myLayer);
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  storeList = [
    {
      id: 1,
      name: 'Grocery Store',
      lat: -1.189,
      long: 36.7214016,
      distance: 0,
      details: 'We are selling the best groceries',
    },
    {
      id: 2,
      name: 'Shoe Store',
      lat: -1.289,
      long: 36.7214016,
      distance: 0,
      details: 'We are selling the best shoes',
    },
    {
      id: 3,
      name: 'Cereals Store',
      lat: -1.489,
      long: 36.3214016,
      distance: 0,
      details: 'We are selling the best cereals',
    },
    {
      id: 4,
      name: 'Milk Store',
      lat: -1.689,
      long: 36.5214016,
      distance: 0,
      details: 'We are selling the best milk products',
    },
  ];

  selectedStore = { name: '', lat: 0, long: 0, distance: '', details: '' };

  myCoords = {
    lat: 0,
    long: 0,
    distance: 0,
  };

  ngOnInit() {
    this.getMyLocation();
  }

  nearestStores() {
    return this.storeList
      .map((store) => {
        store.distance = this.calculateDistance({
          lat: store.lat,
          long: store.long,
        });

        return store;
      })
      .sort((a, b) => a.distance - b.distance);
  }

  calculateDistance(storeCoords: { lat: number; long: number }) {
    var radlat1 = (Math.PI * this.myCoords.lat) / 180;
    var radlat2 = (Math.PI * storeCoords.lat) / 180;
    var theta = this.myCoords.long - storeCoords.long;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;

    dist = dist * 1.609344;

    return Math.floor(dist);
  }

  getMyLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        Object.assign(this.myCoords, {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    } else {
      /* geolocation IS NOT available */
    }
  }

  showDetails(store: any) {
    this.selectedStore = store;
  }
}

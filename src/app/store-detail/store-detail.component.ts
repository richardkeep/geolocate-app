import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css'],
})
export class StoreDetailComponent {
  @Input() selectedStore = {
    name: '',
    lat: 0,
    long: 0,
    distance: '',
    details: '',
  };
  ngOnInit() {
    console.log('works');
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

export class User {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  popup = true;
  popupThank = true;

  closePopup(): void {
    this.popup = true;
    this.popupThank = true;
    if (this.popup === true) {
      this.popup = false;
    }
  }

  closePopupThank(): void {
    this.popupThank = true;
    if (this.popupThank === true) {
      this.popupThank = false;
    }
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})

export class MainBannerComponent implements OnInit {
  popup = true;
  popupThank =  true;

  closePopup(): void  {
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

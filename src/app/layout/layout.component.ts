import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

export class User {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  openMenu = false;
  user: User = new User();
  email = new FormControl('');

  routerLinkActive(): void {
    if (window.innerWidth < 950) {
      this.openMenu = false;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}

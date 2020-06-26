import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.sass']
})
export class MenuHeaderComponent implements OnInit {
  logo = '../../../../assets/images/logo.svg';
  constructor(private router: Router) {}

  toHome() {
    this.router.navigate(['/']);
  }

  ngOnInit() {}
}

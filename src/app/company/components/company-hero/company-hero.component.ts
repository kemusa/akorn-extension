import { Component, OnInit, Input } from '@angular/core';
import { addressIcon, locationIcon } from 'src/app/shared/icons';

@Component({
  selector: 'app-company-hero',
  templateUrl: './company-hero.component.html',
  styleUrls: ['./company-hero.component.sass'],
})
export class CompanyHeroComponent implements OnInit {
  @Input() company;
  _locationIcon: string = locationIcon;
  _addressIcon: string = addressIcon;
  constructor() {}

  ngOnInit() {}
}

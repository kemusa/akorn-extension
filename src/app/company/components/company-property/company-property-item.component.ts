import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-property-item',
  templateUrl: './company-property-item.component.html',
  styleUrls: ['./company-property-item.component.sass'],
})
export class CompanyPropertyItemComponent implements OnInit {
  @Input() property;

  constructor() {}

  ngOnInit() {}
}

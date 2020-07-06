import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-owner-card',
  templateUrl: './company-owner-card.component.html',
  styleUrls: ['./company-owner-card.component.sass'],
})
export class CompanyOwnerCardComponent implements OnInit {
  @Input() owner: any;
  private isPerson: boolean;
  constructor() {}

  setOwnerType() {
    switch (this.owner.kind) {
      case 'corporate-entity-person-with-significant-control':
        this.isPerson = false;
        break;
      case 'individual-person-with-significant-control':
        this.isPerson = true;
        break;
      default:
        this.isPerson = true;
        break;
    }
  }

  ngOnInit() {
    this.setOwnerType();
  }
}

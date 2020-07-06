import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-officer-card',
  templateUrl: './company-officer-card.component.html',
  styleUrls: ['./company-officer-card.component.sass'],
})
export class CompanyOfficerCardComponent implements OnInit {
  @Input() officer;
  constructor() {}

  ngOnInit() {}
}

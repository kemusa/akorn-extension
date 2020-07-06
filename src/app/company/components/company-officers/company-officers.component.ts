import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-officers',
  templateUrl: './company-officers.component.html',
  styleUrls: ['./company-officers.component.sass'],
})
export class CompanyOfficersComponent implements OnInit {
  // todo: create type for officers
  private officers: any[];

  constructor(private _companyService: CompanyService) {
    this._companyService.companySubject.subscribe((match) => {
      if (match) {
        this._getOfficersList(match.company_house_id);
      }
    });
  }

  private _loadData() {}

  private _getOfficersList(companyId) {
    const list$ = this._companyService.getOfficers(companyId);
    list$.subscribe((list) => {
      console.log('foo');
      this.officers = list.items;
      console.log(this.officers);
    });
  }

  ngOnInit() {}
}

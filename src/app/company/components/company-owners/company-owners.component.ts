import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-owners',
  templateUrl: './company-owners.component.html',
  styleUrls: ['./company-owners.component.sass'],
})
export class CompanyOwnersComponent implements OnInit {
  private owners: any[];

  constructor(private _companyService: CompanyService) {
    this._companyService.companySubject.subscribe((match) => {
      if (match) {
        this._getOwnerList(match.company_house_id);
      }
    });
  }

  private _getOwnerList(companyId) {
    const list$ = this._companyService.getOwners(companyId);
    list$.subscribe((list) => {
      this.owners = list.items;
    });
  }

  ngOnInit() {}
}

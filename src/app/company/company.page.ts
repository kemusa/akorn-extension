import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { LandRegistryService } from '../shared/services/land-registry.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { CompanyService } from './services/company.service';
import { LoaderService } from '../shared/components/loader/services/loader.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.sass'],
})
export class CompanyPage implements OnInit {
  // todo: provide type for this company
  _company = {};

  private _totalProperties: number;

  constructor(private _companyService: CompanyService) {
    this._companyService.company$.subscribe((match) => {
      if (match) {
        this._initCompany(match);
      }
    });
    this._companyService.properties$.subscribe((properties) => {
      if (properties) {
        this._totalProperties = properties.job.totalRows;
      }
    });
  }

  private async _initCompany(match) {
    this._company = {
      name: match.company_name,
      companyId: match.company_house_id,
      regNo: match.company_reg_no,
      type: match.proprietorship_category,
      address: match.company_address,
    };
  }

  async ngOnInit() {}
}

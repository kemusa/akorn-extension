import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { LandRegistryService } from 'src/app/shared/services/land-registry.service';
import { LoaderService } from 'src/app/shared/components/loader/services/loader.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-company-properties',
  templateUrl: './company-properties.component.html',
  styleUrls: ['./company-properties.component.sass'],
})
export class CompanyPropertiesComponent implements OnInit {
  // todo: provide type for this company
  _company = {};

  private properties: MatchObject;
  private totalProperties: number;
  @ViewChild(IonInfiniteScroll, { static: false })
  _infiniteScroll: IonInfiniteScroll;

  constructor(
    private _landRegService: LandRegistryService,
    private _companyService: CompanyService,
    private _changeDetection: ChangeDetectorRef,
    private _loader: LoaderService
  ) {
    this._companyService.company$.subscribe((match) => {
      this._initCompany(match);
    });
  }

  private async _loadData(event) {
    if (this.properties.matches.length !== this.totalProperties) {
      const data = await this._landRegService.getMoreQueryData(
        this.properties.job.jobReference.jobId,
        this.properties.job.pageToken
      );
      this._updateMatches(data);
      this.properties.matches.push(...data.matches);
      event.target.complete();
      this._changeDetection.detectChanges();
    } else {
      this._infiniteScroll.disabled = true;
    }
  }

  private async _updateMatches(update) {
    this.properties.job = update.job;
  }

  private async _initCompany(match) {
    this._loader.show();
    const properties = await this._landRegService.getCompanyProperties(
      match.company_reg_no
    );
    this._companyService.updateProperties(properties);
    this.properties = properties;
    this.totalProperties = properties.job.totalRows;
    this._company = {
      name: match.company_name,
      companyId: match.company_house_id,
      regNo: match.company_reg_no,
      type: match.proprietorship_category,
      address: match.company_address,
    };
    this._loader.hide();
  }

  ngOnInit() {}
}

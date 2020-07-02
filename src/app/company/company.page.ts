import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import { LandRegistryService } from '../shared/services/land-registry.service';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { CompanyService } from './services/company.service';
import { LoaderService } from '../shared/components/loader/services/loader.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.sass'],
})
export class CompanyPage implements OnInit {
  // @Input() land_reg_property_address: string;
  // @Input() postcode: string;
  // @Input() tenure: string;
  // @Input() company_name: string;
  // @Input() company_reg_no: string;
  // @Input() proprietorship_category: string;
  // @Input() company_address: string;
  // @Input() title_no: string;
  // todo: provide type for this company
  _company = {};

  private _properties: MatchObject;
  private _totalProperties: number;
  @ViewChild(IonInfiniteScroll, { static: false })
  _infiniteScroll: IonInfiniteScroll;

  constructor(
    private _landRegService: LandRegistryService,
    private modalController: ModalController,
    private _companyService: CompanyService,
    private _changeDetection: ChangeDetectorRef,
    private _loader: LoaderService
  ) {
    this._companyService.company$.subscribe((match) => {
      this._initCompany(match);
    });
    // const properties$ = this._landRegService.getCompanyProperties(
    //   this.company_reg_no
    // );
    // properties$.subscribe((props) => {
    //   console.log('got props');
    //   console.log(props);
    // });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  private async _loadData(event) {
    if (this._properties.matches.length !== this._totalProperties) {
      const data = await this._landRegService.getMoreQueryData(
        this._properties.job.jobReference.jobId,
        this._properties.job.pageToken
      );
      this._updateMatches(data);
      this._properties.matches.push(...data.matches);
      event.target.complete();
      this._changeDetection.detectChanges();
    } else {
      this._infiniteScroll.disabled = true;
    }
  }

  private async _updateMatches(update) {
    this._properties.job = update.job;
  }

  private async _initCompany(match) {
    this._loader.show();
    const properties = await this._landRegService.getCompanyProperties(
      match.company_reg_no
    );
    this._loader.hide();
    this._properties = properties;
    this._totalProperties = properties.job.totalRows;
    this._company = {
      name: match.company_name,
      regNo: match.company_reg_no,
      type: match.proprietorship_category,
      address: match.company_address,
    };
  }

  async ngOnInit() {}
}

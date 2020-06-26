import { Component, OnInit, Input } from '@angular/core';
import { LandRegistryService } from '../shared/services/land-registry.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.sass'],
})
export class CompanyPage implements OnInit {
  @Input() land_reg_property_address: string;
  @Input() postcode: string;
  @Input() tenure: string;
  @Input() company_name: string;
  @Input() company_reg_no: string;
  @Input() proprietorship_category: string;
  @Input() company_address: string;
  @Input() title_no: string;
  // todo: provide type for this company
  _company = {};

  private _properties: Match[];

  constructor(
    private _landRegService: LandRegistryService,
    private modalController: ModalController
  ) {
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

  async ngOnInit() {
    const properties = await this._landRegService.getCompanyProperties(
      this.company_reg_no
    );
    this._properties = properties;
    // console.log('got properties');
    // console.log(properties);
    this._company = {
      name: this.company_name,
      regNo: this.company_reg_no,
      type: this.proprietorship_category,
      address: this.company_address,
    };
  }
}

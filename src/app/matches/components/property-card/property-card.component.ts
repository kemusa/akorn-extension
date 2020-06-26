import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CompanyPage } from 'src/app/company/company.page';
import { locationIcon } from 'src/app/shared/icons';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.sass'],
})
export class PropertyCardComponent implements OnInit {
  @Input() match: Match;
  _locationIcon: string = locationIcon;
  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: CompanyPage,
      componentProps: this.match,
    });
    return await modal.present();
  }

  ngOnInit() {}
}

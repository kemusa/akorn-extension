import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyPageRoutingModule } from './company-routing.module';

import { CompanyPage } from './company.page';
import { CompanyPropertyItemComponent } from './components/company-property/company-property-item.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyHeroComponent } from './components/company-hero/company-hero.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    CompanyPage,
    CompanyPropertyItemComponent,
    CompanyHeroComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CompanyPageModule {}

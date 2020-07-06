import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyPageRoutingModule } from './company-routing.module';

import { CompanyPage } from './company.page';
import { CompanyPropertyItemComponent } from './components/company-property/company-property-item.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyHeroComponent } from './components/company-hero/company-hero.component';
import { CompanyPropertiesComponent } from './components/company-properties/company-properties.component';
import { CompanyOfficersComponent } from './components/company-officers/company-officers.component';
import { CompanyOwnersComponent } from './components/company-owners/company-owners.component';
import { CompanyOwnerCardComponent } from './components/company-owners/company-owner-card/company-owner-card.component';
import { CompanyOfficerCardComponent } from './components/company-officers/company-officer-card/company-officer-card.component';

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
    CompanyPropertiesComponent,
    CompanyOfficersComponent,
    CompanyOwnersComponent,
    CompanyOwnerCardComponent,
    CompanyOfficerCardComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CompanyPageModule {}

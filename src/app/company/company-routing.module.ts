import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyPage } from './company.page';
import { CompanyPropertiesComponent } from './components/company-properties/company-properties.component';
import { CompanyOwnersComponent } from './components/company-owners/company-owners.component';
import { CompanyOfficersComponent } from './components/company-officers/company-officers.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyPage,
    children: [
      { path: 'company-properties', component: CompanyPropertiesComponent },
      { path: 'company-owners', component: CompanyOwnersComponent },
      { path: 'company-officers', component: CompanyOfficersComponent },
      { path: '', redirectTo: 'company-properties', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyPageRoutingModule {}

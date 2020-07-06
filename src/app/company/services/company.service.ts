import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  // Company Observable
  companySubject = new BehaviorSubject<any>(null);
  company$ = this.companySubject.asObservable();
  // Company Properties Observable
  propertiesSubject = new BehaviorSubject<any>(null);
  properties$ = this.propertiesSubject.asObservable();

  constructor(private _fns: AngularFireFunctions) {}

  public updateCompany(company: any) {
    company.company_house_id = this._padCompanyId(company.company_reg_no);
    this.companySubject.next(company);
  }

  // todo: create type for property listing
  public updateProperties(properties: any[]) {
    this.propertiesSubject.next(properties);
  }

  public getOwners(companyId) {
    try {
      const callable = this._fns.httpsCallable('getCompanyOwners');
      return callable({ companyId });
    } catch (error) {
      // todo: handle
      console.error(error.stack);
    }
  }

  public getOfficers(companyId) {
    try {
      const callable = this._fns.httpsCallable('getCompanyOfficers');
      return callable({ companyId });
    } catch (error) {
      // todo: handle
      console.error(error.stack);
    }
  }

  private _padCompanyId(id: string) {
    return id.padStart(8, '0');
  }
}

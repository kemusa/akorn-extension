import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class LandRegistryService {
  constructor(private _fns: AngularFireFunctions) {}

  public async getPropertyOwners(postcode: string) {
    try {
      const callable = await this._fns.httpsCallable('getPropertyOwners');
      const res = await callable(postcode)
        .toPromise()
        .catch((error) => {
          console.log(error);
        });
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  public async getCompanyProperties(companyID: string) {
    try {
      const callable = await this._fns.httpsCallable('getCompanyProperties');
      const res = await callable(companyID)
        .toPromise()
        .catch((error) => {
          console.log(error);
        });
      return res;
    } catch (error) {
      console.error(error);
    }
  }
}

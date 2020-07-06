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
          console.error(error.stack);
        });
      return res;
    } catch (error) {
      // todo: handle
      console.error(error.stack);
    }
  }

  public async getMoreQueryData(jobId: string, pageToken: string) {
    try {
      const callable = await this._fns.httpsCallable('getMoreQueryData');
      const res = await callable({ jobId, pageToken })
        .toPromise()
        .catch((error) => {
          console.error(error.stack);
        });
      return res;
    } catch (error) {
      // todo: handle
      console.error(error.stack);
    }
  }

  public async getCompanyProperties(companyID: string) {
    try {
      const callable = await this._fns.httpsCallable('getCompanyProperties');
      const res = await callable(companyID)
        .toPromise()
        .catch((error) => {
          console.error(error.stack);
        });
      return res;
    } catch (error) {
      // todo: handle
      console.error(error.stack);
    }
  }
}

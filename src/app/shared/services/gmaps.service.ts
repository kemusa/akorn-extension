import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GmapsService {
  private _querySub = new BehaviorSubject<string>(null);
  public queries$ = this._querySub.asObservable();

  constructor(private _fns: AngularFireFunctions) {}

  public async getMapsData(queryString: string) {
    const qs = this._queryFiler(queryString);
    if (qs) {
      const callable = await this._fns.httpsCallable('getMapsData');
      const res = await callable(queryString)
        .toPromise()
        .catch((error) => {
          console.log(error);
        });
      return res;
    }
    return qs;
  }

  private _queryFiler(queryString: string) {
    if (!this._stringEquals(queryString)) {
      this._addQuery(queryString);
      return queryString;
    }
    return null;
  }

  private _stringEquals(queryString: string) {
    return this._querySub.value == queryString;
  }

  private _addQuery(queryString) {
    this._querySub.next(queryString);
  }
}

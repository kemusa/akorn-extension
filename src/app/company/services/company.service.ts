import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  companySubject = new BehaviorSubject<any>(null);
  company$ = this.companySubject.asObservable();
  constructor() {}

  updateCompany(company: any) {
    this.companySubject.next(company);
  }
}

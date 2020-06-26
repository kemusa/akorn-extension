import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingServiceDep {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.loadingSubject.asObservable();
  // isLoading = false;
  constructor(public loadingController: LoadingController) {}

  startLoading() {
    this.loadingSubject.next(true);
  }

  stopLoading() {
    this.loadingSubject.next(false);
  }

  // async loadingPresent() {
  //   this.isLoading = true;
  //   return await this.loadingController
  //     .create({
  //       message: 'Please wait ...',
  //       spinner: 'circles',
  //     })
  //     .then((a) => {
  //       a.present().then(() => {
  //         console.log('loading presented');
  //         if (!this.isLoading) {
  //           a.dismiss().then(() => console.log('abort laoding'));
  //         }
  //       });
  //     });
  // }

  // async loadingDismiss() {
  //   this.isLoading = false;
  //   return await this.loadingController
  //     .dismiss()
  //     .then(() => console.log('loading dismissed'));
  // }
}

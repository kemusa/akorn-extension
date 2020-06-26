import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

// Create a new window interface so analytics can be set
interface AppWindow extends Window {
  analytics: any;
}

// Bootstrap analytics
const appwindow = (window as unknown) as AppWindow;
// If the Segment library has been successfully included, start tracking things
if (appwindow.analytics) {
  appwindow.analytics.load(environment.SegmentSourceKey);
  // Now we can trigger events, such as: appwindow.analytics.page()
}

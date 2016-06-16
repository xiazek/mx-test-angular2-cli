import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MxTestAngular2CliAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(MxTestAngular2CliAppComponent);

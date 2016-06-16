import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MxTestAngular2CliAppComponent } from '../app/mx-test-angular2-cli.component';

beforeEachProviders(() => [MxTestAngular2CliAppComponent]);

describe('App: MxTestAngular2Cli', () => {
  it('should create the app',
      inject([MxTestAngular2CliAppComponent], (app: MxTestAngular2CliAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'mx-test-angular2-cli works!\'',
      inject([MxTestAngular2CliAppComponent], (app: MxTestAngular2CliAppComponent) => {
    expect(app.title).toEqual('mx-test-angular2-cli works!');
  }));
});

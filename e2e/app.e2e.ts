import { MxTestAngular2CliPage } from './app.po';

describe('mx-test-angular2-cli App', function() {
  let page: MxTestAngular2CliPage;

  beforeEach(() => {
    page = new MxTestAngular2CliPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mx-test-angular2-cli works!');
  });
});

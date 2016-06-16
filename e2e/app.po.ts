export class MxTestAngular2CliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mx-test-angular2-cli-app h1')).getText();
  }
}

import { SCBWebPage } from './app.po';

describe('scb-web App', function() {
  let page: SCBWebPage;

  beforeEach(() => {
    page = new SCBWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

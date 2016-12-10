import { THSRCPage } from './app.po';

describe('thsrc App', function() {
  let page: THSRCPage;

  beforeEach(() => {
    page = new THSRCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

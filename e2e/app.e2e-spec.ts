import { TpcPage } from './app.po';

describe('tpc App', function() {
  let page: TpcPage;

  beforeEach(() => {
    page = new TpcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

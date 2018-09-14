import { AngularProductListPage } from './app.po';

describe('angular-product-list App', function() {
  let page: AngularProductListPage;

  beforeEach(() => {
    page = new AngularProductListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

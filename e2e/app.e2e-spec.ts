import { NgPdxRocksPage } from './app.po';

describe('ng-pdx-rocks App', () => {
  let page: NgPdxRocksPage;

  beforeEach(() => {
    page = new NgPdxRocksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

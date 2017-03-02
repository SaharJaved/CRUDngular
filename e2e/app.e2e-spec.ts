import { IadPage } from './app.po';

describe('iad App', () => {
  let page: IadPage;

  beforeEach(() => {
    page = new IadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

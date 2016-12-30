import { PocCrawlPage } from './app.po';

describe('poc-crawl App', function() {
  let page: PocCrawlPage;

  beforeEach(() => {
    page = new PocCrawlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

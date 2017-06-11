import { A2RoutingPage } from './app.po';

describe('a2-routing App', () => {
  let page: A2RoutingPage;

  beforeEach(() => {
    page = new A2RoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

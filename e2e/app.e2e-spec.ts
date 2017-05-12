import { CGIHackathonPage } from './app.po';

describe('cgihackathon App', () => {
  let page: CGIHackathonPage;

  beforeEach(() => {
    page = new CGIHackathonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AngularQuestionsPage } from './app.po';

describe('angular-questions App', () => {
  let page: AngularQuestionsPage;

  beforeEach(() => {
    page = new AngularQuestionsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

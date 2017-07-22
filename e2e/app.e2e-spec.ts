import { ImageUploadPage } from './app.po';

describe('image-upload App', () => {
  let page: ImageUploadPage;

  beforeEach(() => {
    page = new ImageUploadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

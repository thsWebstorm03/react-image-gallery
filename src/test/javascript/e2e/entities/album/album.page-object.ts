import { element, by, ElementFinder } from 'protractor';

export default class AlbumComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  title: ElementFinder = element(by.id('album-heading'));

  clickOnCreateButton() {
    return this.createButton.click();
  }

  getTitle() {
    return this.title;
  }
}

import test, { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly breadcrumbSection: Locator;
  readonly parentCategory: Locator;
  readonly category: Locator;

  constructor(public readonly page: Page) {
    this.breadcrumbSection = page.getByRole('menu');
    this.parentCategory = this.breadcrumbSection.locator('.align-items-center a').last();
    this.category = this.breadcrumbSection.locator('.align-items-center span');
  }

  async verifyPageIsOpen(url: string, name: string, parentCategory = '') {
    await test.step(`Verify if page with url: ${url} is open`, async () => {
      await expect(this.page).toHaveURL(url);
      if (parentCategory) await expect(this.parentCategory).toHaveText(parentCategory.replaceAll('&', 'and'));
      await expect(this.category).toHaveText(name.replaceAll('&', 'and'));
    });
  }
}

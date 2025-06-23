import { expect, Locator, Page } from '@playwright/test';
import { PageMeta } from '../types/page-meta';

export class BasePage {
  readonly breadcrumbSection: Locator;
  readonly parentCategory: Locator;
  readonly category: Locator;

  constructor(public readonly page: Page) {
    this.breadcrumbSection = page.getByRole('menu');
    this.parentCategory = this.breadcrumbSection.locator('.align-items-center a').last();
    this.category = this.breadcrumbSection.locator('.align-items-center span');
  }

    async verifyPageIsOpen(pageMeta: PageMeta){
    await expect(this.page).toHaveURL(pageMeta.url);
    await expect(this.parentCategory).toHaveText(pageMeta.sideCategory.replaceAll('&', 'and'));
    await expect(this.category).toHaveText(pageMeta.name);
    }
}

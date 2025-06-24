import { expect } from '@playwright/test';
import { test } from '../utils/fixtures/pages';
import Tag from '../utils/tag';

test.describe('TEST3 -> Check form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Check email validation', { tag: Tag.ALL }, async ({ page, pages }) => {
    await pages.home.getInTouch.click();
    await expect(page).toHaveURL(pages.contactSalesPage.url);
    await pages.contactSalesPage.emailInput.fill(Math.random().toString(36).slice(2));
    await expect(pages.contactSalesPage.emailError).toHaveText(pages.contactSalesPage.errorMsg.email.incorrect);
  });
});

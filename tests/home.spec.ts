import { expect } from '@playwright/test';
import { test } from '../utils/fixtures/pages';
import Tag from '../utils/tag';

test.describe('TEST1 -> Check End-to-end solutions for financial services', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Check End-to-end solutions for financial services', { tag: Tag.ALL }, async ({ page, pages, isMobile }) => {
    const data = pages.home.e2eSolutionsData;
    if (isMobile) {
      await expect(pages.home.solutionDot).toHaveCount(data.length);
    } else {
      await expect(pages.home.solutionCard).toHaveCount(data.length);
    }
    for (let i = 0; i < data.length; i++) {
      if (isMobile) {
        await pages.home.checkE2ESolutions(isMobile, data[i], i);
        await pages.home.mobileSolutionLearnMore.click();
        await pages.base.verifyPageIsOpen(data[i].url, data[i].title);
        await page.goBack();
        if (i !== data.length - 1) await pages.home.solutionDot.nth(i + 1).click();
      } else {
        await pages.home.checkE2ESolutions(isMobile, data[i], i);
        await pages.home.solutionLearnMore.nth(i).click();
        await pages.base.verifyPageIsOpen(data[i].url, data[i].title);
        await page.goBack();
      }
    }
  });
});

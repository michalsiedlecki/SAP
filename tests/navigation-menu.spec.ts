import { test, expect } from '@playwright/test';
import { HeaderPage } from '../pages/header-page';
import Tag from '../utils/tag';
import { BasePage } from '../pages/base-page';

test.describe('TEST2 -> Check navigation menu', () => {
  let basePage: BasePage;
  let headerPage: HeaderPage;
  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    headerPage = new HeaderPage(page);
    await page.goto('');
  });

  test('Check desktop menu navigate', { tag: Tag.DESKTOP }, async ({ page }) => {
    await headerPage.openPageFromMenu(headerPage.eSGKpiEngine);
    await basePage.verifyPageIsOpen(headerPage.eSGKpiEngine);
  });

  test('Check mobile menu navigate', { tag: Tag.MOBILE }, async ({ page, isMobile }) => {
    await headerPage.openPageFromMenu(headerPage.eSGKpiEngine, isMobile);
    await basePage.verifyPageIsOpen(headerPage.eSGKpiEngine);
  });
});

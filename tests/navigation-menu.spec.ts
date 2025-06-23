import { test, expect } from '@playwright/test';
import { HeaderPage } from '../pages/header-page';
import Tag from '../utils/tag';

test.describe('Check navigation menu', () => {
  let headerPage: HeaderPage;
  test.beforeEach(async ({ page }) => {
    await page.goto('');
    headerPage = new HeaderPage(page);
  });

  test('Check desktop menu navigate', { tag: Tag.DESKTOP }, async ({ page }) => {
    await headerPage.topNavigationCategory.filter({ hasText: 'Products' }).click();
    await headerPage.sideNavigationCategory.filter({ hasText: 'Finance & ESG' }).click();
    await headerPage.columnNavigationCategory.filter({ hasText: 'ESG KPI Engine' }).click();
    await expect(page).toHaveURL('finance-esg/esg-kpi-engine/');
  });

  test('Check mobile menu navigate', { tag: Tag.MOBILE }, async ({ page }) => {
    await headerPage.hamburgerMenu.click();
    await headerPage.mobileTopNavigationCategory.filter({ hasText: 'Products' }).click();
    await headerPage.mobileColumnNavigationCategory.filter({ hasText: 'ESG KPI Engine' }).click();
    await expect(page).toHaveURL('finance-esg/esg-kpi-engine/');
  });
});

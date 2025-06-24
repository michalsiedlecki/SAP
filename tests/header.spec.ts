import { PageMeta } from '../types/types';
import { test } from '../utils/fixtures/pages';
import Tag from '../utils/tag';

test.describe('TEST2 -> Check navigation menu', () => {
  let eSGKpiEngine: PageMeta;
  test.beforeEach(async ({ page, pages }) => {
    await page.goto('');
    eSGKpiEngine = pages.header.eSGKpiEngine;
  });

  test('Check desktop menu navigate to page', { tag: Tag.DESKTOP }, async ({pages}) => {
    await pages.header.openPageFromMenu(eSGKpiEngine);
    await pages.base.verifyPageIsOpen(eSGKpiEngine.url, eSGKpiEngine.name, eSGKpiEngine.sideCategory);
  });

  test('Check mobile menu navigate to page', { tag: Tag.MOBILE }, async ({ pages, isMobile }) => {
    await pages.header.openPageFromMenu(eSGKpiEngine, isMobile);
    await pages.base.verifyPageIsOpen(eSGKpiEngine.url, eSGKpiEngine.name, eSGKpiEngine.sideCategory);
  });
});

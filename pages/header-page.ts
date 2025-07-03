import { Locator, Page } from '@playwright/test';
import { PageMeta } from '../types/types';

export class HeaderPage {
  readonly hamburgerMenu: Locator;
  readonly navigationMenu: Locator;
  readonly topNavigationCategory: Locator;
  readonly sideNavigationCategory: Locator;
  readonly columnNavigationCategory: Locator;
  readonly mobileNavigationMenu: Locator;
  readonly mobileTopNavigationCategory: Locator;
  readonly mobileSideNavigationCategory: Locator;
  readonly mobileColumnNavigationCategory: Locator;

  readonly eSGKpiEngine: PageMeta = {
    name: 'ESG KPI Engine',
    url: 'finance-esg/esg-kpi-engine/',
    sideCategory: 'Finance & ESG',
    topCategory: 'Products',
  };

  constructor(public readonly page: Page) {
    this.hamburgerMenu = page.getByRole('button', { name: 'Open menu' });
    this.navigationMenu = page.locator('#menu-walker');
    this.topNavigationCategory = this.navigationMenu.locator('.menu-item');
    this.sideNavigationCategory = this.navigationMenu.locator('.menu-section-item');
    this.columnNavigationCategory = this.navigationMenu.locator('.walker__columns a');
    this.mobileNavigationMenu = page.locator('#menu-walker-1');
    this.mobileTopNavigationCategory = this.mobileNavigationMenu.locator('.menu-item__link');
    this.mobileSideNavigationCategory = this.mobileNavigationMenu.locator('.accordion__item');
    this.mobileColumnNavigationCategory = this.mobileNavigationMenu.locator('.flex-column a');
  }

  async openPageFromMenu(pageMeta: PageMeta, isMobile = false) {
    if (isMobile) {
      await this.hamburgerMenu.click();
      await this.mobileTopNavigationCategory
        .filter({ hasText: pageMeta.topCategory })
        .click();
      await this.mobileSideNavigationCategory
        .filter({ hasText: pageMeta.sideCategory })
        .click();
      await this.mobileColumnNavigationCategory
        .filter({ hasText: pageMeta.name })
        .click();
    } else {
      await this.topNavigationCategory.filter({ hasText: pageMeta.topCategory }).click();
      await this.sideNavigationCategory.filter({ hasText: pageMeta.sideCategory }).click();
      await this.columnNavigationCategory.filter({ hasText: pageMeta.name }).click();
    }
  }


}

import { Locator, Page } from '@playwright/test';

export class HeaderPage {
  readonly hamburgerMenu: Locator;
  readonly navigationMenu: Locator;
  readonly topNavigationCategory: Locator;
  readonly sideNavigationCategory: Locator;
  readonly columnNavigationCategory: Locator;
  readonly mobileNavigationMenu: Locator;
  readonly mobileTopNavigationCategory: Locator;
  readonly mobileColumnNavigationCategory: Locator;

  readonly categories = {
    top: {
      Products: {
        side: {
          'Finance & ESG': {
            column: {
              'ESG and climate management': 'ESG KPI Engine',
            },
          },
        },
      },
    },
  };

  constructor(public readonly page: Page) {
    this.hamburgerMenu = page.getByRole('button', { name: 'Open menu' });
    this.navigationMenu = page.locator('#menu-walker');
    this.topNavigationCategory = this.navigationMenu.locator('.menu-item');
    this.sideNavigationCategory = this.navigationMenu.locator('.menu-section-item');
    this.columnNavigationCategory = this.navigationMenu.locator('.walker__columns a');
    this.mobileNavigationMenu = page.locator('#menu-walker-1');
    this.mobileTopNavigationCategory = this.mobileNavigationMenu.locator('.menu-item__link');
    this.mobileColumnNavigationCategory = this.mobileNavigationMenu.locator('.flex-column a');
  }

  //   async navigateToColumnCategory(){

  //   }
}

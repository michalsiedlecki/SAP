import { test as pages } from '@playwright/test';
import { BasePage } from '../../pages/base-page';
import { HeaderPage } from '../../pages/header-page';
import { HomePage } from '../../pages/home-page';

export const test = pages.extend<{
  pages: {
    base: BasePage;
    header: HeaderPage;
    home: HomePage;
  };
}>({
  pages: async ({ page }, use) => {
    const base = new BasePage(page);
    const header = new HeaderPage(page);
    const home = new HomePage(page);

    await Promise.all([
      use({
        base,
        header,
        home,
      }),
    ]);
  },
});

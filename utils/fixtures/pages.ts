import { test as pages } from '@playwright/test';
import { BasePage } from '../../pages/base-page';
import { HeaderPage } from '../../pages/header-page';
import { HomePage } from '../../pages/home-page';
import { ContactSalesPage } from '../../pages/contact-sales.page';

export const test = pages.extend<{
  pages: {
    base: BasePage;
    contactSalesPage: ContactSalesPage;
    header: HeaderPage;
    home: HomePage;
  };
}>({
  pages: async ({ page }, use) => {
    const base = new BasePage(page);
    const contactSalesPage = new ContactSalesPage(page);
    const header = new HeaderPage(page);
    const home = new HomePage(page);

    await Promise.all([
      use({
        base,
        contactSalesPage,
        header,
        home,
      }),
    ]);
  },
});

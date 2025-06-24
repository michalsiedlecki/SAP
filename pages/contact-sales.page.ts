import { Locator, Page } from '@playwright/test';

export class ContactSalesPage {
  readonly url = 'contact-sales/';
  readonly errorMsg = { email: { incorrect: 'Email must be formatted correctly.' } };
  readonly emailInput: Locator;
  readonly emailError: Locator;
  constructor(public readonly page: Page) {
    this.emailInput = page.locator('[name="email"]');
    this.emailError = page.locator('.hs_email .hs-error-msg');
  }
}

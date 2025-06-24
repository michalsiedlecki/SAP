import test, { expect, Locator, Page } from '@playwright/test';
import { E2ESolution } from '../types/types';

export class HomePage {
  readonly solutionCard: Locator;
  readonly solutionIcon: Locator;
  readonly solutionTitle: Locator;
  readonly solutionDescription: Locator;
  readonly solutionLearnMore: Locator;
  readonly solutionDot: Locator;
  readonly mobileSolutionCard: Locator;
  readonly mobileSolutionIcon: Locator;
  readonly mobileSolutionTitle: Locator;
  readonly mobileSolutionDescription: Locator;
  readonly mobileSolutionLearnMore: Locator;
  readonly getInTouch: Locator;

  readonly e2eSolutionsData: E2ESolution[] = [
    {
      icon: 'icon-money-cash-coin-billing-cash-currency-finance-payment.svg',
      title: 'Banking',
      description:
        'Reach more customers and build trust with real-time financial insights and risk control. Join the 800 banks globally who have chosen our platform.',
      url: 'banking/',
    },
    {
      icon: 'icon-defense-block-protect-shield-security.svg',
      title: 'Insurance',
      description:
        'Accelerate digital insurance processes to meet customer expectations and create new revenue streams by connecting easily to the ecosystem.',
      url: 'insurance/',
    },
    {
      icon: 'icon-cloud-forest-tree-nature-sustainable-ecology-outdoor.svg',
      title: 'Finance & ESG',
      description:
        'Establish a single source of truth for profitability and turn compliance into your advantage using our integrated finance & ESG platform.',
      url: 'finance-esg/',
    },
  ];

  constructor(public readonly page: Page) {
    this.solutionCard = this.page.locator('.cards-block .gy-4 a[aria-label="Learn more"]');
    this.solutionIcon = this.solutionCard.locator('.position-relative img');
    this.solutionTitle = this.solutionCard.locator('.position-relative h3');
    this.solutionDescription = this.solutionCard.locator('.position-relative p');
    this.solutionLearnMore = this.solutionCard.locator('.btn').describe('Solution Learn More');
    this.solutionDot = this.page.locator('.cards-block .glide__bullet');
    this.mobileSolutionCard = this.page.locator('.cards-block .glide__slide--active a[aria-label="Learn more"]');
    this.mobileSolutionIcon = this.mobileSolutionCard.locator('.position-relative img');
    this.mobileSolutionTitle = this.mobileSolutionCard.locator('.position-relative h3');
    this.mobileSolutionDescription = this.mobileSolutionCard.locator('.position-relative p');
    this.mobileSolutionLearnMore = this.mobileSolutionCard.locator('.btn').describe('Mobile Solution Learn More');
    this.getInTouch = this.page.locator('.hero-block a[aria-label="Get in touch"]');
  }

  async checkE2ESolutions(isMobile: boolean, e2eSolutionsData: E2ESolution, i: number) {
    await test.step(`Check if card for ${e2eSolutionsData.title} is visible`, async () => {
      if (isMobile) {
        await expect(this.mobileSolutionTitle.filter({ hasText: e2eSolutionsData.title })).toBeVisible();
        await expect(this.mobileSolutionDescription.filter({ hasText: e2eSolutionsData.description })).toBeVisible();
        await expect.poll(() => this.mobileSolutionIcon.getAttribute('src')).toContain(e2eSolutionsData.icon);
      } else {
        await expect(this.solutionTitle.filter({ hasText: e2eSolutionsData.title })).toBeVisible();
        await expect(this.solutionDescription.filter({ hasText: e2eSolutionsData.description })).toBeVisible();
        await expect.poll(() => this.solutionIcon.nth(i).getAttribute('src')).toContain(e2eSolutionsData.icon);
      }
    });
  }
}

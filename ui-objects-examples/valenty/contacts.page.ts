import { expect, type Locator, type Page } from '@playwright/test';

export class ValentyContactsPage {
    private readonly pageUrl = 'http://valenty.eu/contacts/'
    private readonly page: Page;
    private readonly conatctsMenuLocator: Locator;
    private readonly emailInfoLocator: Locator;
    private readonly facebookProfileInfoLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.conatctsMenuLocator = page.getByRole('heading', { name: 'Контакти' });
        this.emailInfoLocator = page.getByRole('heading', { name: 'Електронна поща за кореспонденция: valyo@valenty.eu' });
        this.facebookProfileInfoLocator = page.getByRole('heading', { name: 'Facebook профил: http://www.' });
    }

    async goto() {
        await this.page.goto(this.pageUrl);
    }

    async isPageNavigated() {
        await this.conatctsMenuLocator.waitFor();
        return (await this.emailInfoLocator.isVisible()) && (await this.facebookProfileInfoLocator.isVisible());
    }
}
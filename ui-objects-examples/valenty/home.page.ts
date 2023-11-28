import { expect, type Locator, type Page } from '@playwright/test';

export class ValentyHomePage {
    private readonly pageUrl = 'http://valenty.eu'
    private readonly page: Page;
    readonly menuLocator: Locator;
    private readonly headerLocator: Locator;
    private readonly contentLocator: Locator;

    private readonly getMenuLocatorByText = (text: string) => this.page.getByRole('link', { name: `${text}` });

    constructor(page: Page) {
        this.page = page;
        this.headerLocator = page.locator('h1', { hasText: 'Сайт' });
        this.contentLocator = page.locator('[id="content"]');
        this.menuLocator = page.locator('.class_menu')
    }

    async goto() {
        await this.page.goto(this.pageUrl);
    }

    async getContentText() {
        return await this.contentLocator.allTextContents();
    }

    async getMenuText() {
        return await this.menuLocator.allTextContents();
    }

    async isHeaderVisible() {
        return await this.headerLocator.isVisible();
    }

    async assertHeaderContains(expectedText: string) {
        expect(this.headerLocator).toHaveText(expectedText, { useInnerText: true });
    }

    async clickOnMenuItem(menuText: string) {
        await this.getMenuLocatorByText(menuText).click();
    }
}
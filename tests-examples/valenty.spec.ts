import { test, expect } from '@playwright/test';
import { ValentyHomePage } from '../ui-objects-examples/valenty/home.page';
import { ValentyContactsPage } from '../ui-objects-examples/valenty/contacts.page';

test('Valenty home page header should be as expected', async ({ page }) => {
    const homePage = new ValentyHomePage(page);

    await homePage.goto();

    expect(await homePage.isHeaderVisible()).toBe(true);
});

test('Valenty home page should contain "фотография"', async ({ page }) => {
    const homePage = new ValentyHomePage(page);

    await homePage.goto();

    expect((await homePage.getContentText())[0]).toContain("фотография");
});

test('The menu on Valenty home page should contain expected menu items', async ({ page }) => {
    const homePage = new ValentyHomePage(page);

    await homePage.goto();

    expect((await homePage.getMenuText())[0]).toContain('Пейзажи / Природа\nПортрети\nАрт\nРазни\nКонтакти');
});

test('The menu on Valenty home page should contain expected menu items - V2', async ({ page }) => {
    const homePage = new ValentyHomePage(page);

    await homePage.goto();

    expect(homePage.menuLocator).toHaveText('Пейзажи / Природа\nПортрети\nАрт\nРазни\nКонтакти');
});

test('Clicking on "Контакти" in Valenty home page should lead to Contacts page', async ({ page }) => {
    const homePage = new ValentyHomePage(page);
    const contactsPage = new ValentyContactsPage(page);

    await homePage.goto();
    await homePage.clickOnMenuItem('Контакти');

    expect(await contactsPage.isPageNavigated()).toBe(true);
});

// test.beforeAll(async () => {
//     console.log('Starting all tests');
//   });

// test.afterAll(async () => {
//     console.log('Finished all tests\n');
//   });

// test.beforeEach(async ({ page }, testInfo) => {
//     console.log(`Starting test ${testInfo.title}`)
//   });

// test.afterEach(async ({ page }, testInfo) => {
//     console.log(`Finished test '${testInfo.title}' with status ${testInfo.status}`);

//     if (testInfo.status !== testInfo.expectedStatus)
//         console.log(`Did not run as expected, ended up at ${page.url()}`);
// });
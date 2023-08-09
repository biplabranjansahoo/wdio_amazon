import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        browser.maximizeWindow()
        await LoginPage.laptopSearch('Laptops')
        await LoginPage.selectLaptopBrand2('Dell')
        await LoginPage.selectLaptopBrand1('HP')
        await LoginPage.sortPrice('Price: High to Low')
        await LoginPage.selectCustomerRating('3 star rating')
        await LoginPage.firstIteamClick('Hightest Price Item')
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await LoginPage.moreDetails();
        await LoginPage.techDetails_col_1();
        await LoginPage.techDetails_col_2();
    })
})


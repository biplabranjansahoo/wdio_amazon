import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
 /**
     * define selectors using getter methods
     */
 class LoginPage extends Page {
 get inputsearchname () {
    return $('#twotabsearchtextbox');
}

get btnSubmit () {
    return $('#nav-search-submit-button');
}

get brandHp(){
    return $('//span[.="HP"]');
}

get brandDell(){
    return $('//span[.="Dell"]');
}

get customerRating () {
    return $('//div[@id="reviewsRefinements"]/ul[1]/span[2]');
}

get priceSortButton(){
    return $('//span[text()="Featured"]');
}

get priceSort(){
    return $('=Price: High to Low');
}

get firstIteam(){
    return $('//span[@data-component-type="s-search-results"]/div[1]/div[3]/div[1]/div[1]/div[1]//a');
}

/**
 * overwrite specific options to adapt it to page object
 */
open () {
    // return super.open('login');
    return super.open();
}

/**
 * a method to encapsule automation code to interact with the page
 * e.g. to search ofr laptops in the search box
 */
async laptopSearch (laptop) {
    await this.inputsearchname.setValue(laptop);
    await this.btnSubmit.click();
}

/**
 * a method to encapsule automation code to interact with the page
 * e.g. to select two brands HP and Dell
 */
async selectLaptopBrand1 (laptop1) {
    await $('//span[.="'+ laptop1 +'"]').click();
}

async selectLaptopBrand2 (laptop2) {
    await $('//span[.="'+ laptop2 +'"]').click();
}

/**
 * a method to encapsule automation code to interact with the page
 * e.g. to click on 3 star rating and up
 */
async selectCustomerRating (customerRating) {
    await this.customerRating.click();
}

/**
 * a method to encapsule automation code to interact with the page
 * e.g. to sort the price from high to low
 */
async sortPrice (price) {
    await this.priceSortButton.click();
    await $('='+price+'').click()
}

/**
 * a method to encapsule automation code to interact with the page
 * e.g. to click on the first search result
 */
async firstIteamClick (price) {
await this.firstIteam.click();
}

/**
 * a method to encapsule automation code to interact with the page
 * e.g. to click on the first search result
 */
async moreDetails () {
    const moreDetails = await $('//a[@id="seeMoreDetailsLink"]')
    await moreDetails.waitForDisplayed()
    await moreDetails.click();
}
   
async techDetails_col_1 () {
        await $$('//table[@id="productDetails_techSpec_section_1"]/tbody/tr/th').forEach(ell =>{
        console.log(ell.getText())
    })
    
}

async techDetails_col_2 () {
        await $$('//table[@id="productDetails_techSpec_section_1"]/tbody/tr/td').forEach(el =>{
        console.log(el.getText())
    })
}

 }
export default new LoginPage();

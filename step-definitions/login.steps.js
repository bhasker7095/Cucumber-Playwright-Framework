const { Given, When, Then } = require('@cucumber/cucumber')
const HomePage = require('../pages/HomePage')
const { expect } = require('@playwright/test')


// cucumber playwright automation framework

Given('user navigates to the DemoBlaze website', async function () {
    this.homepage = new HomePage(this.page)
    await this.homepage.navigate()
    
})
Then('website title should be displayed correctly', async function () {
    const title = await this.homepage.getPageTitle()
    await expect(this.page).toHaveTitle('STORE')
    console.log('Website title:', title)
})
Then('website URL should be displayed correctly', async function () {
    const URL = await this.homepage.getPageURL()
    await expect(this.page).toHaveURL('https://www.demoblaze.com/')
    console.log('Website url is :', URL)
})
When('user clicks on Home link', async function () {
    await this.homepage.clickHomeLink()
})
Then('Home link should be visible', async function () {
    await expect(this.homepage.homelink).toBeVisible()
})
When('user clicks on contact link', async function () {
    await this.homepage.clickContactlink()
})
Then('Contact link should be visible', async function () {
    await expect(this.homepage.contactlink).toBeVisible()
})
When('user closes the Contact popup', async function () {
    await this.homepage.clickCloseButton()
})
When('user clicks the About link', async function () {
    await this.homepage.clickAboutUsLink()
})
Then('aboutuslink should be visible', async function () {
    await expect(this.homepage.aboutuslink).toBeVisible()
})
When('user closes the about popup', async function () {
    await this.homepage.clickCloseAbtbutton()
})
When('user cliks on phones category', async function () {
    await this.homepage.clickPhonesCategoryLink()
})
Then('phones category products should be displayed', async function () {
    await expect(this.homepage.samsung).toBeVisible()
})
When('user clicks on Laptops category', async function () {
    await this.homepage.clicklaptopsCatorgy()
})
Then('Laptops category products should be displayed', async function () {
    await expect(this.homepage.macBookPro).toBeVisible()
})
When('user selects {string} category', async function (category) {
    await this.homepage.clickCategory(category)
})
Then('{string} should be displayed', async function (product) {
    await this.homepage.verifyProduct(product)
})
Then('following product categories should be available', async function (dataTable) {
    const categories = dataTable.raw()
    console.log(categories)
})
When('user stores a product name', async function () {
    this.productname = 'Samsung galaxy s6'
    console.log(this.productname)
})
Then('stored product name should be displayed', async function(){
    console.log('stored product name :', this.productname)

})
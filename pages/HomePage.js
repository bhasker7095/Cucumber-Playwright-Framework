    class HomePage {
        constructor(page) {
            this.page = page
            this.homelink = this.page.getByRole('link', { name: 'Home ' })
            this.contactlink = this.page.getByRole('link', { name: 'Contact' })
            this.aboutuslink = this.page.getByRole('link', { name: 'About us' })
            this.closeButton = this.page.getByRole('button', { name: 'Close' })
            this.closeAbtbButton = this.page.getByRole('button', { name: 'Close' })
            this.phonesCategory = this.page.getByRole('link', { name: 'Phones' })
            this.samsung = this.page.getByRole('link', { name: 'Samsung galaxy s6' })
            this.laptopsCategory = this.page.getByRole('link', { name: 'Laptops' })
            this.macBookPro = this.page.getByRole('link', {
                name: 'MacBook Pro'
            })

        }

        async navigate() {
            await this.page.goto('https://www.demoblaze.com/')
        }
        async getPageTitle() {
            return await this.page.title()
        }
        async getPageURL() {
            return await this.page.url()
        }
        async clickHomeLink() {
            await this.homelink.click()
        }
        async clickContactlink() {
            await this.contactlink.click()
        }
        async clickCloseButton() {
            await this.closeButton.nth(1).click()
        }
        async clickAboutUsLink() {
            await this.aboutuslink.click()
        }
        async clickCloseAbtbutton() {
            await this.closeAbtbButton.nth(1).click()
        }
        async clickPhonesCategoryLink() {
            await this.phonesCategory.click()
        }
        async clicklaptopsCatorgy() {
            await this.laptopsCategory.click()
        }

        async clickCategory(category){
            await this.page.getByRole('link', {name : category}).click()
        }

        async verifyProduct(product){
            await this.page.getByRole('link', {name : product, exact : true}).waitFor(
                { state : 'visible'}
            )
        }

    }

    module.exports = HomePage
const { Before, After, setDefaultTimeout, Status } = require('@cucumber/cucumber')
const { chromium } = require('playwright')

setDefaultTimeout(30000)

Before(async function () {
    this.browser = await chromium.launch({ headless: false })
    this.conetext = await this.browser.newContext()
    this.page = await this.conetext.newPage()
})

After(async function (Scenario) {
    if (Scenario.result.status === Status.FAILED){
       const screenshot =  await this.page.screenshot({
            fullPage : true,
            path : "screenshot.png"
        })
        await this.attach(screenshot, 'image/png')
    }
    await this.browser.close()
})

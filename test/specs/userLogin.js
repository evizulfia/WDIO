describe('Login to roastmarket account', () =>{
    it('Login with valid credentials', async () =>{
        let myUrl = 'https://roastmarket.de/customer/login'
        let smallPause = 2000
        let bigPause = 5000

        await browser.url(myUrl)
        await browser.pause(bigPause)
        await $('//*[@id="my_account"]/div/div/div/form/div[1]/div[1]/input').setValue('evizulfia@gmail.com')
        await browser.pause(smallPause)
        await $('//*[@id="my_account"]/div/div/div/form/div[2]/div[1]/input').setValue('aku8april')
        await browser.pause(smallPause)
        await (await $('button[type="submit"]')).click()
        await browser.pause(bigPause)
        await browser.url('https://www.roastmarket.de/customer')
        await browser.pause(bigPause)
        // await expect($('#flash')).toBeExisting()
        await expect($('//*[@id="my_account"]/div[2]/div[1]/div[1]/h1/strong')).toHaveTextContaining(
            'Zulfia Rahmah')
        await browser.pause(bigPause)

        // old way
        // let pageTitle = await browser.getTitle()
        // let pageURL = await browser.getUrl()

        // expect(pageTitle).toContain('roastmarket - online Kaffee kaufen')
        // expect(pageURL).toContain('https://www.roastmarket.de/customer')

        // modern way
        expect(browser).toHaveTitleContaining('roastmarket - online Kaffee kaufen')
        expect(browser).toHaveUrl('https://www.roastmarket.de/customer')

        let pageElement = await $('strong')
        await expect(pageElement).toExist()
        await expect(pageElement).toBeDisplayed()
        await expect(pageElement).toHaveTextContaining('Hallo')
    
    })

    it("Check the side-menu", async () =>{
        let sideMenu = await $('div[class="customer-nav desktop-only"]')
        await expect(sideMenu).toExist()
        await expect(sideMenu).toBeDisplayed()
        // await expect(sideMenu).tocon
    })

    it("Go to order history", async () =>{
        let bigPause = 5000
        await browser.pause(bigPause)
        let orderHistory = await $('//*[@id="my_account"]/div[2]/div[2]/ul/li[6]/a')
        await expect(orderHistory).toExist()
        await orderHistory.click()
        await browser.pause(bigPause)
        expect(browser).toHaveUrl('https://www.roastmarket.de/order')
    })
})


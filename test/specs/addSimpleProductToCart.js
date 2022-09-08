describe('Add product to cart', () =>{
    it('Caimano 1kg added to cart', async () =>{
        let myUrl = 'https://www.roastmarket.de/kaffee.html'
        let smallPause = 2000
        let bigPause = 5000
        await browser.url(myUrl)
        await browser.pause(bigPause)
        let simpleProduct = await $('a[href="/caffe-caimano-espresso-classico.html"]')

        await simpleProduct.click()
        await browser.pause(bigPause)
        expect(browser).toHaveUrl('https://www.roastmarket.de/caffe-caimano-espresso-classico.html')

        
        let cookiePopup = await $('#onetrust-accept-btn-handler')
        await cookiePopup.waitForExist()
        await cookiePopup.click()
        // await selectbox('button[text()="1kg"]').click()
        // // await (await $('button[text()="1kg"]')).click()
        await browser.pause(bigPause)

    })

    it('Device Emulation', async () => {
        let myUrl = 'https://www.roastmarket.de/kaffee.html'
        let mobile = [375, 667]
        let tablet = [768, 1024]
        let desktop = [1650, 1050]
        
        // mobile device
        await browser.setWindowSize(mobile[0], mobile[1])
        await browser.url(myUrl)
        await browser.pause(2000)

        // tablet device
        await browser.setWindowSize(tablet[0], tablet[1])
        await browser.url(myUrl)
        await browser.pause(2000)

        // desktop device
        await browser.setWindowSize(desktop[0], desktop[1])
        await browser.url(myUrl)
        await browser.pause(2000)

    })

    it('Screenshot', async () => {
        let myUrl = 'https://www.roastmarket.de/kaffee.html'
        await browser.url(myUrl)
        await browser.pause(2000)
        await browser.saveScreenshot('./screenshots/screenshot.png')

        let title = await $('h1')
        await title.saveScreenshot('./screenshots/title.png')
    })
})


describe.only('Advanced Testings', () => {

    beforeEach(async() => {
        await loadWebsite()
        await browser.pause(2000)
    })

    afterEach(async() => {
        await browser.reloadSession()
    })
    it('File upload', async () => {
        let smallPause = 2000
        let bigPause = 5000
        let filePath = ('./data/screenshot.png')
        await browser.customFileUpload(filePath, '#file-upload', 'input[type="submit"]')
        await browser.pause(bigPause)
    })

    it('File upload 2', async () => {
        let smallPause = 2000
        let bigPause = 5000
        let filePath = ('./data/screenshot.png')
        const remoteFilePath = await browser.uploadFile(filePath)
        let fileInput = await $('#file-upload')

        await fileInput.setValue(remoteFilePath)
        await browser.pause(smallPause)
        await (await $('input[type="submit"]')).click()
        await browser.pause(bigPause)

        let uploadedFile = await $('#uploaded-files')
        await expect(uploadedFile).toHaveTextContaining('screenshot.png')
    })

    it('File upload 3', async () => {
        let bigPause = 5000
        let filePath = ('./data/screenshot.png')
        const remoteFilePath = await browser.uploadFile(filePath)
        let fileInput = await $('#file-upload')

        await fileInput.setValue(remoteFilePath)
        await (await $('input[type="submit"]')).click()
        await browser.pause(bigPause)

        let uploadedFile = await $('#uploaded-files')
        await expect(uploadedFile).toHaveTextContaining('screenshot.png')
    })

    async function loadWebsite() {
        await browser.url('https://the-internet.herokuapp.com/upload')
        await browser.pause(2000)
    }
})
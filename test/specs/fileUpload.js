// only / skip
describe.skip('File Upload', () => {
    it('Upload file', async () => {
        let myUrl = 'https://the-internet.herokuapp.com/upload'
        let smallPause = 2000
        let bigPause = 5000
        await browser.url(myUrl)
        await browser.pause(bigPause)
        let filePath = path.join(__dirname, '../data/test.txt')
        let fileInput = await $('#file-upload')
        await fileInput.setValue(filePath)
        await browser.pause(smallPause)
        await (await $('input[type="submit"]')).click()
        await browser.pause(bigPause)
        let uploadedFile = await $('#uploaded-files')
        await expect(uploadedFile).toHaveTextContaining('test.txt')
    })
})
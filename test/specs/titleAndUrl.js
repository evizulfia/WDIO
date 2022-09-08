describe('Title and URL are correct', () => {
    it.only('Displays the correct title and URL', async () => {
        const result = await browser.getTitleAndURL()
        console.log("Title: " + result.title)
        console.log("URL: " + result.url)
    })
})
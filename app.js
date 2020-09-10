const puppeteer = require('puppeteer')

console.log('Gerando pdf')

const pdfScreenshot = async() => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.nytimes.com/section/world')
    // await page.screenshot({path: 'newyorktimes.png'})

    await page.pdf({
        path: 'newyorktimes.pdf',
        format: 'A4'
    })
 

    await browser.close()
}

//pdfScreenshot()




const getInfo = async() => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.nytimes.com/')

    const info = await page.evaluate( () => {
        return {
            title: document.title
        }
    })

    console.log(info)

    await browser.close()
}

getInfo();
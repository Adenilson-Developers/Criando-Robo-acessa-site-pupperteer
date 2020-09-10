const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log(" Robo conversor de moeda");


async function robo(){
    const browser = await puppeteer.launch({handless: true});
    const page = await browser.newPage();
    const moedaBase = readlineSync.question('Informe Uma moeda base') || 'dolar';
    const moedaFinal = readlineSync.question('Informe uma moeda desejada') || 'real';
    const umaUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=dola&aqs=chrome.1.69i57j69i59.13273j0j9&sourceid=chrome&ie=UTF-8`;
    await page.goto(umaUrl);
    await page.screenshot({ path: 'example.png'});


    const resultado = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
      });
    
    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} e ${resultado}`);

    await browser.close();
}

robo();
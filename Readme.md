
# O PUPPETEER É UMA BIBLIOTECA NODE, ELA PERMITE ACCESSO AO GHROME
Essa biblioteca fornece uma API de alto nível para controlar o Chrome. Com o uso dessa ferramenta é possivle criar um robô para fazer algumas tarefas automatizada.

Instalação 
npm install puppeteer
yarn add puppeteer

## ALGUMS EXEMPLO QUE VOCÊ PODE FAZER COM O PUPPETEER
Gere capturas de tela e PDFs de páginas.
Rastreie um SPA (Aplicativo de página única) e gere conteúdo pré-renderizado (ou seja, "SSR" (Renderização do lado do servidor)).
Automatize o envio de formulários, testes de IU, entrada de teclado, etc.
Crie um ambiente de teste automatizado e atualizado. Execute seus testes diretamente na versão mais recente do Chrome usando o JavaScript e os recursos do navegador mais recentes.
Capture um rastreamento da linha do tempo de seu site para ajudar a diagnosticar problemas de desempenho.()
Teste as extensões do Chrome.

## COMO FUNCIONA
Cada operação acontece de forma async, fazendo uso das promise.


## É POSSÍVEL RODAR CODIGO DENTRO DO NAVEGADOR

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

Esse código possiblida pegar a informação de titulo da página.
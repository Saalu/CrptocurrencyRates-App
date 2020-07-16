 class CryptoAPI {
     
     async queryAPI(currency, cryptocurrency){
        const  api_key ='94f72ca1bafcd0699a10b40d05246c87'
        const url = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=
        ${api_key}&ids=${cryptocurrency}&interval=1d,30d&convert=${currency}`, )

        const result = await url.json()

        return{
            result
        }
    }

    async getCryptoCurrenciesList() {
        const  api_key ='94f72ca1bafcd0699a10b40d05246c87'
        const url = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${api_key}`)

        const cryptoCurrencies = await url.json();
        return{cryptoCurrencies}
    }
    
    
}



// ` https://api.nomics.com/v1/currencies/ticker?key=94f72ca1bafcd0699a10b40d05246c87
// &ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR `
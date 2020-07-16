class UI {
    constructor(){
        this.init()
    }
    init(){
        this.printCryptoCurrencies()
    }

    printCryptoCurrencies(){
        cryptoAPI.getCryptoCurrenciesList()
            .then(data => {
                const cryptoCurrencies = data.cryptoCurrencies


                const select = document.getElementById('cryptocurrency')

                cryptoCurrencies.map(currency => {
                  console.table( currency.name)
                    
                    const option = document.createElement('option')
                    option.value = currency.id;
                    option.textContent = currency.name
                    // option.appendChild(document.createTextNode(currency.name))
                    select.appendChild(option)
                })
            })
    }

    printMessage(message, className){
        const div = document.createElement('div')

        div.className = className;
        div.appendChild(document.createTextNode(message))

        const messagesDiv = document.querySelector('.messages')
        messagesDiv.appendChild(div)

        //Remove the message
        setTimeout(() => {
            document.querySelector('.messages div').remove()
        },3000)
    }

    //print the results of valuation
    displayResults(result){

        let HTMLTemplate = ''
        HTMLTemplate +=`
            <div class="card cyan darken-3" >
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                    <p>The Price of ${result.name} is ${result.price_usd}</p>
                
                </div> 
            </div>
        `;

        const divResult = document.querySelector('#result')

        divResult.innerHTML =HTMLTemplate
    }
}
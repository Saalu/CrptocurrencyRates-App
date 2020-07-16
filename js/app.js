    
  // ' &ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR'
    
const cryptoAPI = new CryptoAPI()
const ui = new UI



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const currencySelect = document.getElementById('currency').value;
    const cryptocurrencySelect = document.getElementById('cryptocurrency').value;


    //validate he selects 
    if(currencySelect === '' || cryptocurrencySelect === '') {
        ui.printMessage('All the fields are mandatory', 'deep-orange darken-4 card-panel')
    }else {
        cryptoAPI.queryAPI(currencySelect,cryptocurrencySelect)
        .then(data => {
            ui.displayResults(data)
        })
    }

})
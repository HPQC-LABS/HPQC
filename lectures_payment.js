function initPayPalButton() {
    var shipping = 0;
    var itemOptions = document.querySelector("#smart-button-container #item-options");
    var quantity = parseInt();
    var quantitySelect = document.querySelector("#smart-button-container #quantitySelect");
    if (!isNaN(quantity)) {
        quantitySelect.style.visibility = "visible";
    }
    var orderDescription = 'Lecture Series Ticket';
    if (orderDescription === '') {
        orderDescription = 'Item';
    }
    paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'paypal',
        },
        createOrder: function (data, actions) {
            var selectedItemDescription = itemOptions.options[itemOptions.selectedIndex].value;
            var selectedItemPrice = parseFloat(itemOptions.options[itemOptions.selectedIndex].getAttribute("price"));
            var tax = (0 === 0) ? 0 : (selectedItemPrice * (parseFloat(0) / 100));
            if (quantitySelect.options.length > 0) {
                quantity = parseInt(quantitySelect.options[quantitySelect.selectedIndex].value);
            } else {
                quantity = 1;
            }
            tax *= quantity;
            tax = Math.round(tax * 100) / 100;
            var priceTotal = quantity * selectedItemPrice + parseFloat(shipping) + tax;
            priceTotal = Math.round(priceTotal * 100) / 100;
            var itemTotalValue = Math.round((selectedItemPrice * quantity) * 100) / 100;
            console.log(code);

            return actions.order.create({
                purchase_units: [{
                    description: orderDescription,
                    amount: {
                        currency_code: 'CAD',
                        value: priceTotal,
                        breakdown: {
                            item_total: {
                                currency_code: 'CAD',
                                value: itemTotalValue,
                            },
                            shipping: {
                                currency_code: 'CAD',
                                value: shipping,
                            },
                            tax_total: {
                                currency_code: 'CAD',
                                value: tax,
                            }
                        }
                    },
                    items: [{
                        name: selectedItemDescription,
                        unit_amount: {
                            currency_code: 'CAD',
                            value: selectedItemPrice,
                        },
                        quantity: quantity
                    }]
                 }],
                 application_context: {
                     shipping_preference: 'NO_SHIPPING'
                 },
                 payer: {
                     address: {
                         country_code: code,
                     }
                 }
             });
         },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                alert('Transaction completed by ' + details.payer.name.given_name + '!');
            });
        },
        onError: function (err) {
            console.log(err);
        },
    }).render('#paypal-button-container');
}






//Setting default conditions
let code = 'CA';
let currency = 'CAD';
let currencyName = 'Dollars';




//Logging country, and curreny from users ip
function getIp() {

    $.getJSON('https://ipapi.co/json/', function(data) {
                console.log(JSON.stringify(data, null, 2));
                code = data.country;
                currency = data.currency;
            
            
            });
    
}


//Running the following once website has loaded
window.onload = function() {
    
    //Takes in the currency symbol and exchange rate from exchange rate xml file
    function readXML(){
        xmlContent = '';
        fetch('exchangeRates/eurofxref-daily02-25-21.xml').then((response)=>{
            //Parsing content from file
            response.text().then((xml)=>{
                xmlContent = xml;
                let parser = new DOMParser();
                let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
                let xmlCube = xmlDOM.querySelectorAll('Cube');
    
                xmlCube.forEach(CubeXmlNode => {
                    //Initializing variables 
                    var list;
                    var listCurrency;
                    var listExchangeRate;
                    console.log(CubeXmlNode.children.length);

                    //Checking each entry to see if it matches users currency from their ip
                    for(i=0; i < CubeXmlNode.children.length; i++){
                        list = CubeXmlNode.children[i];
                        listExchangeRate =  list.getAttribute('rate');
                        listCurrency = list.getAttribute('currency');
                        listSymbol = list.getAttribute('symbol');
                        
                        if(listCurrency == currency){
                            getPrice(list);
                            break;
                            console.log("Country is: " + listCurrency + " = " + currency + "\n Exchange rate is: " + listExchangeRate);
                        }
                        
                    }

                });
            });
        });
    
    
    }

    //Determines the price of the ticket given the users location
    function getPrice(input) {
        list = input;
        console.log(list.getAttribute('rate'));
        console.log(list.getAttribute('currency') + "TEST");



        var select = document.getElementsByTagName('select');
        var lecPrice = [20, 40, 50];
        var lecPriceUSD = [16, 32, 40]; 


        //Altering currency based on multiplier by location
        for(i=0; i < lecPrice.length; i++){
            
            if(list.getAttribute('currency') == 'CAD'){

                if(i==0){
                    document.getElementsByName('item-options')[0].options[i].innerHTML = i+1 + " lecture: $" + lecPrice[i];
                }
                else{
                    document.getElementsByName('item-options')[0].options[i].innerHTML = i+1 + " lectures: $" + lecPrice[i];
                }
            }

            else if(list.getAttribute('currency') == 'USD'){

                if(i==0){
                    document.getElementsByName('item-options')[0].options[i].innerHTML = i+1 + " lecture: $" + lecPriceUSD[i];
                }
                else{
                    document.getElementsByName('item-options')[0].options[i].innerHTML = i+1 + " lectures: $" + lecPriceUSD[i];
                }
            }
            //lecPrice[i] = Math.round(lecPrice[i] * list.getAttribute('rate'));
            //lecSymbol = list.getAttribute('symbol');

        
        }
        console.log(lecPrice);
    }

    //Running the above functions
    getIp();

    setTimeout(function() { 

        readXML();
        setTimeout(function() { 
            console.log(code);
            initPayPalButton();
        }, 200);
       

    }, 200);


}

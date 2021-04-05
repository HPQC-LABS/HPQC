function initPayPalButton() {
    console.log(code);
    console.log(currency);
    console.log(currencyName);
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
                        country_code: 'CA'
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


let code = 'CA';
let currency = 'CAD';
let currencyName = 'Dollars';





function getIp() {

    $.getJSON('https://ipapi.co/json/', function(data) {
                console.log(JSON.stringify(data, null, 2));
                code = data.country;
                currency = data.currency;
            
            
            });
    
}



window.onload = function() {

    
    function readXML(){

        xmlContent = '';
        fetch('exchangeRates/eurofxref-daily02-25-21.xml').then((response)=>{
            response.text().then((xml)=>{
                xmlContent = xml;
                let parser = new DOMParser();
                let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
                let xmlCube = xmlDOM.querySelectorAll('Cube');
    
                xmlCube.forEach(CubeXmlNode => {
                    var list;
                    var listCurrency;
                    var listExchangeRate;
                    console.log(CubeXmlNode.children.length);
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

    function getPrice(input) {
        list = input;
        console.log(list.getAttribute('rate'));
        var select = document.getElementsByTagName('select');
        /*Exchange rate is based on EUR so prices will look off here*/
        var lecPrice = [23, 46, 68, 75, 91]; /*Original prices in CAD: 35, 70, 105, 140, 115*/
        var lecPriceDiscount = [20, 40, 60, 75, 80]; /*Original discount prices in CAD: 20, 40, 60, 80, 75*/
        for(i=0; i < lecPrice.length; i++){
            
            lecPrice[i] = Math.round(lecPrice[i] * list.getAttribute('rate'));
            lecSymbol = list.getAttribute('symbol');
            
            select[0].options[i] = new Option((i + 1) + " Lecture: "  + lecSymbol  + " "  + lecPrice[i] );
        
        }
        console.log(lecPrice);
    }

    getIp();
    setTimeout(function() { 

        initPayPalButton(); 
        readXML();
       

    }, 700);


}
        
    /*
    If the following api stops working below is a stack overflow page containing a list of possible other apis with pros/cons
    https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript

    **Note when accessing information from api (example: currency) the codes may differ with a new api and you will have to change the declaration lines:
            code = data.country;
            currency = data.currency;

        In this example the .country and .currency will need to be changed to their corresponding titles in the api being used
        The same goes for the xml file containing the exchange rates, if that website ever goes down and new rates are needed 
        https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html

    */
  
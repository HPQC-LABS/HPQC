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
                currency = data.currency;
                code = data.country;         
            
            });
}


//Running the following once website has loaded
window.onload = function() {
    


    //Determines the price of the ticket given the users location
    function getPrice() {
//        list = input;
//        console.log(list.getAttribute('rate'));
//        console.log(list.getAttribute('currency') + "TEST");



        var select = document.getElementsByTagName('select');
        var lecPrice = [2, 20];
        var lecPriceUSD = [1.75, 16]; 


        //Altering currency based on multiplier by location
        for(i=0; i < lecPrice.length; i++){
            
            if(currency == 'CAD'){
               

                //TEMP METHOD
                //each switch case represents the index in the array, for specific text in each option just change what each element will be set to
                switch(i) {
                    case 0:
                        document.getElementsByName('item-options')[0].options[i].innerHTML = "Test: $" + lecPrice[i];
                        break;
                    case 1:
                        document.getElementsByName('item-options')[0].options[i].innerHTML = "1 lecture: $" + lecPrice[i];
                        break;
               //     case 2:
               //         document.getElementsByName('item-options')[0].options[i].innerHTML = "2 lectures: $" + lecPrice[i];
               //         break;
               //     case 3:
               //         document.getElementsByName('item-options')[0].options[i].innerHTML = "3 lectures: $" + lecPrice[i];
               //         break; 
                  }

            }

            else if(currency == 'USD'){

                /* OLD METHOD
                if(i==0){
                    document.getElementsByName('item-options')[0].options[i].innerHTML = i+1 + " lecture: $" + lecPriceUSD[i];
                }
                else{
                    document.getElementsByName('item-options')[0].options[i].innerHTML = i+1 + " lectures: $" + lecPriceUSD[i];
                }*/


                //TEMP METHOD

                switch(i) {
                    case 0:
                        document.getElementsByName('item-options')[0].options[i].innerHTML = "Test: $" + lecPriceUSD[i];
                        break;
                    case 1:
                        document.getElementsByName('item-options')[0].options[i].innerHTML = "1 lecture: $" + lecPriceUSD[i];
                        break;
                //    case 2:
                //        document.getElementsByName('item-options')[0].options[i].innerHTML = "2 lectures: $" + lecPriceUSD[i];
                //        break;
                //    case 3:
                //        document.getElementsByName('item-options')[0].options[i].innerHTML = "3 lectures: $" + lecPriceUSD[i];
                //        break;
                  }

            }
            //lecPrice[i] = Math.round(lecPrice[i] * list.getAttribute('rate'));
            //lecSymbol = list.getAttribute('symbol');

        
        }
        console.log(code);
    }

    //Running the above functions
//    getIp().then(function() {
//        getPrice();
//        }).then(function() {
//        initPayPalButton();
//        });
    $.when(getIp()).then(getPrice()).then(initPayPalButton())

//    setTimeout(function() { 
//        getPrice();
////        readXML();
//        setTimeout(function() { 
//            console.log(code);
//            initPayPalButton();
//        }, 500);
//       
//
//    }, 500);


}

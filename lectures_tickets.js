function initPayPalButton() {
    getIp();
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
initPayPalButton();


var code = 'CA';

function getIp() {

    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            const { latitude, longitude } = position.coords;
            $.getJSON('https://ipapi.co/json/', function(data) {
            /*console.log(JSON.stringify(data, null, 2));*/
            code = 'NA';
            console.log(code);
            return code
          });
          
        });

    }   
    else {

        console.log("geolocation is not supported");

    }
    
}

console.log(code);
code = getIp();
console.log(code);

    
        
    /*
    If the following api stops working below is a stack overflow page containing a list of possible other apis and pros/cons
    https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript

    */
  
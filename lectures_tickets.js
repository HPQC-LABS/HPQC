/*
        //Function initializes paypal payment button
        function initPayPalButton() {
            
            //Variable declariation / initialization
            var shipping = 0;
            var itemOptions = document.querySelector("#smart-button-container #item-options");
            var quantity = parseInt();
            var quantitySelect = document.querySelector("#smart-button-container #quantitySelect");
            if (!isNaN(quantity)) {
                quantitySelect.style.visibility = "visible";
            }
            //Payment description
            var orderDescription = 'Lecture Series Ticket';
            if (orderDescription === '') {
                orderDescription = 'Item';
            }
            //Styling of button
            paypal.Buttons({
                style: {
                    shape: 'rect',
                    color: 'gold',
                    layout: 'vertical',
                    label: 'paypal',

                },

                //Creation of new order 
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
                            //Price, currency, & location settings
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
                /*Exchange rate is based on EUR so prices will look off here*/
                /*
                var lecPrice = [20, 40, 50]; /*Original prices in CAD: 35, 70, 105, 140, 115*/
                /*
                var lecPriceUSD = [16, 32, 40]; /*Original prices in CAD: 35, 70, 105, 140, 115*/
                //var lecPriceDiscount = [20, 40, 60, 75, 80]; /*Original discount prices in CAD: 20, 40, 60, 80, 75*/
                //Altering currency based on multiplier by location
                //document.getElementById("1").innerHTML = "TEST";
                /*
                document.getElementsByName('item-options')[0].options[0].innerHTML = "Water";

                for(i=0; i < lecPrice.length; i++){
                    
                    if(list.getAttribute('currency') == 'CAD'){


                        document.getElementsByName('item-options')[0].options[i].innerHTML = i+1 + " lecture(s): $" + lecPrice[i];
                    }

                    else if(list.getAttribute('currency') == 'USD'){

                        document.getElementsByName('item-options')[0].options[i].innerHTML = i+1 + " lecture(s): $" + lecPriceUSD[i];
                    }
                    //lecPrice[i] = Math.round(lecPrice[i] * list.getAttribute('rate'));
                    //lecSymbol = list.getAttribute('symbol');
                    //$('select option:contains("Newest")').text('TEMPEST');
                    //$('select[0] option[' + i + ']').text('Pog');
                    //select[0].options[i] = new Option((i + 1) + " Lecture: "  + lecSymbol  + " "  + lecPrice[i] );
                
                }
                console.log(lecPrice);
            }

            //Running the above functions
            getIp();

            setTimeout(function() { 

                readXML();
            

            }, 200);


        }

*/


window.onload = function() {

    var part1 = document.getElementById("part1");
    var part2 = document.getElementById("part2");
    var part3 = document.getElementById("part3");
    var part4 = document.getElementById("part4");

    var next1 = document.getElementById("next1");
    var next2 = document.getElementById("next2");
    var next3 = document.getElementById("next3");

    var back1 = document.getElementById("back1");
    var back2 = document.getElementById("back2");
    var back3 = document.getElementById("back3");

    var progress = document.getElementById("progress");
    


    next1.onclick = function(){
        part1.style.transform = "translateX(-650px)";
        part2.style.transform = "translateX(0px)";
        part1.style.webkitTransform = "translateX(-650px)";
        part2.style.webkitTransform = "translateX(0px)";
        progress.style.width = "50%";

    }
    back1.onclick = function(){
        part1.style.transform = "translateX(0px)";
        part2.style.transform = "translateX(650px)";
        part1.style.webkitTransform = "translateX(0px)";
        part2.style.webkitTransform = "translateX(650px)";
        progress.style.width = "25%";

    }
    next2.onclick = function(){
        part2.style.transform = "translateX(-650px)";
        part3.style.transform = "translateX(0px)";
        part2.style.webkitTransform = "translateX(-650px)";
        part3.style.webkitTransform = "translateX(0px)";
        progress.style.width = "75%";

    }
    back2.onclick = function(){
        part2.style.transform = "translateX(0px)";
        part3.style.transform = "translateX(650px)";
        part2.style.webkitTransform = "translateX(0px)";
        part3.style.webkitTransform = "translateX(650px)";
        progress.style.width = "50%";

    }
    next3.onclick = function(){
        part3.style.transform = "translateX(-650px)";
        part4.style.transform = "translateX(0px)";
        part3.style.webkitTransform = "translateX(-650px)";
        part4.style.webkitTransform = "translateX(0px)";
        progress.style.width = "100%";

    }
    back3.onclick = function(){
        part3.style.transform = "translateX(0px)";
        part4.style.transform = "translateX(650px)";
        part3.style.webkitTransform = "translateX(0px)";
        part4.style.webkitTransform = "translateX(650px)";
        progress.style.width = "75%";

    }


    //Function goes through checkboxes and removes required field from those that aren't selected (as long as at least one is selected)
    $(function(){
        var requiredCheckboxes = $('.options :checkbox[required]');
        requiredCheckboxes.change(function(){
            if(requiredCheckboxes.is(':checked')) {
                requiredCheckboxes.removeAttr('required');
            } else {
                requiredCheckboxes.attr('required', 'required');
            }
        });
    });


    document.addEventListener('invalid', (function () {
        return function (e) {
            alert("Please fill out all required fields before submitting");
            e.preventDefault();
            document.getElementById("name").focus();
        };
    })(), true);

    
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
  
// load the things we need
var express = require('express');
var app = express();
const bodyParser  = require('body-parser');

//required module to make calls to a REST API
const axios = require('axios');
const { response } = require('express');
//const ejsLint = require('ejs-lint');
//const resize = require('./resize')




// added 
app.use(bodyParser.urlencoded());

// public
app.use( express.static( "public" ) );


// use res.render to load up an ejs view file


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
// uses a tagline to desplay a smiley face 

// Sharanjit Sembhi
app.get('/', function(_req, res) {
// use res.render to load up an ejs view file
    res.render('pages/index',);
});

app.get('/add_customer', function(_req, res) {
    // use res.render to load up an ejs view file
        res.render('pages/add_customer',);
    });

app.post('/add_customer_form', function(req, res){
   /*  var customer_status_id = req.body.customer_status_id */
    var customer_first_name = req.body.customer_first_name
    var customer_last_name = req.body.customer_last_name
    var customer_state_name = req.body.customer_state_name
    var customer_city_name = req.body.customer_city_name
    var customer_zipcode = req.body.customer_zipcode
    var customer_address = req.body.customer_address
    var customer_address_2 = req.body.customer_address_2
    var customer_phone = req.body.customer_phone
    var customer_phone_2 = req.body.customer_phone_2
    var customer_email = req.body.customer_email
    var customer_driver_license_num = req.body.customer_driver_license_num
    var customer_driver_license_state = req.body.customer_driver_license_state

        // print variable username to console
/*         console.log(customer_status_id); */
        console.log(customer_first_name);
        console.log(customer_last_name);
        console.log(customer_state_name);
        console.log(customer_city_name);
        console.log(customer_zipcode);
        console.log(customer_address);
        console.log(customer_address_2);
        console.log(customer_phone);
        console.log(customer_phone_2);
        console.log(customer_email);
        console.log(customer_driver_license_num);
        console.log(customer_driver_license_state);


    axios.post('http://127.0.0.1:5000/add_customer',{
/*         customer_status_id: customer_status_id, */
        customer_first_name: customer_first_name,
        customer_last_name: customer_last_name, 
        customer_state_name: customer_state_name, 
        customer_city_name: customer_city_name, 
        customer_zipcode: customer_zipcode, 
        customer_address: customer_address, 
        customer_address_2: customer_address_2, 
        customer_phone: customer_phone,
        customer_phone_2: customer_phone_2, 
        customer_email: customer_email, 
        customer_driver_license_num: customer_driver_license_num, 
        customer_driver_license_state: customer_driver_license_state 
    })     
    
    res.render('pages/thanks.ejs', {
/*         customer_status_id: customer_status_id, */
        customer_first_name: customer_first_name,
        customer_last_name: customer_last_name, 
        customer_state_name: customer_state_name, 
        customer_city_name: customer_city_name, 
        customer_zipcode: customer_zipcode, 
        customer_address: customer_address, 
        customer_address_2: customer_address_2, 
        customer_phone: customer_phone,
        customer_phone_2: customer_phone_2, 
        customer_email: customer_email, 
        customer_driver_license_num: customer_driver_license_num, 
        customer_driver_license_state: customer_driver_license_state,        
        body: req.body
    
    })
});



app.listen(4375);




console.log('4375 is the CIS port');
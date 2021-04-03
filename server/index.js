
const express = require ('express');
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser');
const { result } = require('lodash');
const _ = require('lodash');
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;
const app = express();

require('dotenv').config();


app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/public',express.static(path.join(__dirname, '/public')));
app.use (cors({
    origin: "*",
	credentials: true,
}));




const locsRoute = require('./routes/locs');
const weavesRoute = require('./routes/weaves');
const braidsRoute = require('./routes/braids');
const twistsRoute = require('./routes/twists');

app.use('/locs', locsRoute);
app.use('/weaves', weavesRoute);
app.use('/braids', braidsRoute);
app.use('/twists', twistsRoute);
 
const uri = process.env.ATLAS_URI;


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => console.log("connected"))
.catch((err) => console.log(err));






    const MySecretKey = 'Bearer sk_test_c61587ee669927bed258a4c509b5b26781990987';
    //sk_test_xxxx to be replaced by your own secret key
    const initializePayment = (form, mycallback) => {
        const option = {
            url : 'https://api.paystack.co/transaction/initialize',
            headers : {
                authorization: MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
           },
           form
        }
        const callback = (error, response, body)=>{
            return mycallback(error, body);
        }
        request.post(option,callback);
    }
    const verifyPayment = (ref,mycallback) => {
        const option = {
            url : 'https://api.paystack.co/transaction/verify/' + encodeURIComponent(ref),
            headers : {
                authorization: MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
           }
        }
        const callback = (error, response, body)=>{
            return mycallback(error, body);
        }
        request(option,callback);
    }


app.post('/payments/create',(req, res) =>{

    try{
        const form = _.pick(req.body,['amount','email','full_name']);
        form.metadata = {
            full_name : form.full_name
        }
        form.amount *= 100;
         initializePayment(form, (error, body)=>{
            if(error){
                //handle errors
                console.log(error);
                return;
            }
            response = JSON.parse(body);
            res.send(response.data.authorization_url);
            
        });
    } catch (err) {
        res
            .status(500)
            .json({
                statusCode: 500,
                message: err.message
            });
    }
});

app.get('/paystack/callback', (req,res) => {
    const ref = req.query.reference;
    console.log(ref);
    verifyPayment(ref, (error,body)=>{
        if(error){
            //handle errors appropriately
            console.log(error)
        }
        response = JSON.parse(body);
        // console.log(response.data);
        res.redirect("http://localhost:3006/");
        
    
    });
});


app.listen(port, () => {
console.log(`App running on port ${port}`)
});


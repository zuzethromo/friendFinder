let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let PORT = process.env.PORT || 8080;

let jsonParser = bodyParser.json()

let urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/html-routes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});
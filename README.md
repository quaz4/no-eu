# no-eu
Express middleware that blocks all EU traffic

## Installation
```npm install no-eu --save```

## Usage
```
const eu = require("no-eu");
const express = require('express');
const app = express();

app.use(eu( (req, res, location) => {
    console.log(location);
    res.send("Sorry you're in the EU");
}));

app.get('/', (req, res) => {
    let ip = getIP(req).clientIp;
    let location = lookup.get(ip);
    res.send("Yay you're not in the EU");
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
```

## Licence 
MIT
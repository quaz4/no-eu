# no-eu
Express middleware that blocks all EU traffic

## Install
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
```
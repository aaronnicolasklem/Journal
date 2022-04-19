//Oracle 
const express = require('express');
const port = 3000;
const app = express();
const path = require('path');
///////
const oracleRouter= require(`./routes/oracleRouter`);
const worldRouter= require(`./routes/worldRouter`);
const refsRouter= require(`./routes/refsRouter`);

app.use ('/api/v1/oracle',oracleRouter);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
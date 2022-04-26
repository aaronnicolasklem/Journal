//Oracle 
const express = require('express');
const port = 3000;
const app = express();
const path = require('path');
var time=new Date;
time=time.toTimeString();
///////
const oracleRouter= require(`./routes/oracleRouter`);
const worldRouter= require(`./routes/worldRouter`);
const refsRouter= require(`./routes/refsRouter`);
//when using express static, ensure the file matches the key dammit
app.use('/public', express.static('public'));
app.use ('/api/v1/oracle',oracleRouter);
app.use ('/api/v1/world',worldRouter);
app.use ('/api/v1/refs',refsRouter);



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/pages/index.html'));
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`Server start time: ${time}`);
})
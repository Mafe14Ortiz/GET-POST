const express = require('express')
const app = express()
let name;
let lastname;
let age;

app.use(express.json());

app.post('/', function(request, response){
    name = request.body.name
    lastname = request.body.lastname
    age = request.body.lastname
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/name', function (req, res) {
    res.send(name)
    console.log(name);
  })

app.get('/lastname', function (req, res) {
    res.send(lastname)
    console.log(lastname);
  })

 app.get('/age', function (req, res) {
    res.send(age)
    console.log(age);
  })


app.listen(3000)
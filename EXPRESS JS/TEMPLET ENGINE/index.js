const express = require("express");

const app = express();

app.set("view engine", 'ejs');

app.get('/', (req, resp) => {
  resp.render('index')
})



app.get('/profile', (req, resp) => {
  const user = {
    name: "Mantu Kumar Morya",
    class: "Ec1",
    enr: 92201703001,
    slill:["java","dsa","node","react"]
  }
  resp.render('profile', { user })
})

app.listen(3000, () => console.log("server is running on port [ http://localhost:3000/ ] "))
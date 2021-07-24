const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); // to use static files

app.get("/",(request,response)=>{
  response.sendFile(__dirname + "/index.html");  
});

app.listen(process.env.PORT || port,()=>{
    console.log("Server running at 3000");
});
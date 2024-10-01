var express = require('express')
const cors = require('cors')
const connectDB = require("./db.js");

const app = express ();
app.use(cors());
const PORT = process.env.PORT || 3000;
connectDB.connectDB();



app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });
app.get("/status", (request, response) => {
   const status = {
      "Status": "Running"
   };
   response.send(status);
});
app.get("/id/:id", (request, response) => {
    console.log(request.params['id'])
});

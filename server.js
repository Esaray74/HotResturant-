// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT =  3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
  });

  var reservations = [
    {
      ID: "1",
      name: "Yoda",
      email: "email@email.com",
      phone: "111-111-1111"
    }
  ];

  var waitlist = [
    {
      ID: "2",
      name: "R2",
      email: "R2@email.com",
      phone: "211-111-1111"
    }
  ];
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });

  app.post("/api/reservations", function(req, res) {

    var newreservations = req.body;
    var newwaitlist = req.body;

    if (reservations.length < 5) {

      console.log(newreservations + "added to reservations");

      reservations.push(newreservations);
    
      res.json(newreservations); 

    } else {
      console.log(newwaitlist + "added to waitlist");

      waitlist.push(newwaitlist);

      res.json(newwaitlist); 
    }
  });




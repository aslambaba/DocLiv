require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
let bodyParser = require("body-parser");

// Schemaa 
const Patients = require("./Schemas/Patient");
const Docters = require("./Schemas/Docter");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// SignUP API's

// Patient Register
app.post("/registerPatient", (req, res) => {
  let Patient = new Patients({
    Name: req.body.PatientName,
    Gender: req.body.PatientGender,
    Email: req.body.PatientEmail,
    PhoneNumber: req.body.PatientPhoneNumber,
    Password: req.body.PatientPassword,
  });
  Patient.save().then((e, r) => {
    if (e) {
      console.log(e);
    } else {
      console.log(r);
      return "Data Added";
    }
  });
});
// Docter Register
app.post("/registerDocter", (req, res) => {
  let Docter = new Docters({
    Name: req.body.DocterName,
    Gender: req.body.DocterGender,
    Email: req.body.DocterEmail,
    PhoneNumber: req.body.DocterNumber,
    Password: req.body.Docterpassword,
  });
  Docter.save().then((e, r) => {
    if (e) {
      console.log(e);
    } else {
      console.log(r);
      return "Data Added";
    }
  });
});
// END Signups

// Patient Record Update
app.post("/updatePatient", async (req, res) => {

  const filter = { _id: '623f2328c9dd1751e5206de4' };
  const update = { MedicalHistory: {
    Name: "TB2",
    Status: "Recorved",
    PreviousDocter: "BVH",
  } };
  let doc = await Patients.findOneAndUpdate(filter, update, {
    returnOriginal: false
  });
});

async function DataConnection() {
  try {
    mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
    });
    var conn = mongoose.connection;
    conn.on("connected", function () {
      console.log("database is connected successfully");
    });
    conn.on("disconnected", function () {
      console.log("database is disconnected successfully");
    });
    conn.on("error", console.error.bind(console, "connection error:"));
  } catch (e) {
    console.log(e);
  }
}
app.listen(port, () => {
  DataConnection();
  console.log(`Example app listening on port ${port}`);
});

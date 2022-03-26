require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
let bodyParser = require("body-parser");

// Schemaa 
const Patients = require("./Schemas/Patient");
const doctors = require("./Schemas/doctor");

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
// doctor Register
app.post("/registerdoctor", (req, res) => {
  let doctor = new doctors({
    Name: req.body.doctorName,
    Gender: req.body.doctorGender,
    Email: req.body.doctorEmail,
    PhoneNumber: req.body.doctorNumber,
    Password: req.body.doctorpassword,
  });
  doctor.save().then((e, r) => {
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
    Previousdoctor: "BVH",
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

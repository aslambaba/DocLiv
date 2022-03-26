const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicalHistoryObj = {
  Name: String,
  Status: String,
  PreviousDocter: String,
};

const Patients = new Schema({
  Name: { type: String, required: true },
  Gender: { type: String, required: true },
  Email: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  Password: { type: String, required: true },
  MedicalHistory: {
    type: [MedicalHistoryObj],
    required: false,
  },
});

const PatientsModel = mongoose.model("Patients", Patients);

module.exports = PatientsModel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorDegressObj = {
  DegreeName: String,
  PaasingYear: String,
  Institute: String,
};
const doctorExperienceObj = {
    JobPostionName: String,
    WorksIn: String,
    JobStatus: String,
    WorkingYears: String,
}

const doctors = new Schema({
  Name: { type: String, required: true },
  Gender: { type: String, required: true },
  Email: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  Password: { type: String, required: true },
  doctorDegrees: {
    type: [doctorDegressObj],
    required: false,
  },
  doctorExperience: {
      type: [doctorExperienceObj],
      required: false,
  }
});

const doctorsModel = mongoose.model("doctors", doctors);

module.exports = doctorsModel;

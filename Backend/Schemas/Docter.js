const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocterDegressObj = {
  DegreeName: String,
  PaasingYear: String,
  Institute: String,
};
const DocterExperienceObj = {
    JobPostionName: String,
    WorksIn: String,
    JobStatus: String,
    WorkingYears: String,
}

const Docters = new Schema({
  Name: { type: String, required: true },
  Gender: { type: String, required: true },
  Email: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  Password: { type: String, required: true },
  DocterDegrees: {
    type: [DocterDegressObj],
    required: false,
  },
  DocterExperience: {
      type: [DocterExperienceObj],
      required: false,
  }
});

const DoctersModel = mongoose.model("Docters", Docters);

module.exports = DoctersModel;

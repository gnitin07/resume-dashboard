const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ResumeSchema = new Schema({
name: String,
title: String,
location: String,
profileImage: String, // public URL or base64
summary: String,
certifications: [String],
experienceYears: [{ label: String, value: Number }],
industries: [{ name: String, value: Number }],
skills: [{ name: String, value: Number }],
locations: [{ name: String, value: Number }],
sampleWorks: [String],
createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Resume', ResumeSchema);
require('dotenv').config();
const mongoose = require('mongoose');
const Resume = require('./models/Resume');


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(async () => {
console.log('Connected - seeding...');
await Resume.deleteMany({});


const sample = {
name: 'Jocelyn Rivera',
title: 'Business Intelligence Analyst',
location: 'Singapore',
profileImage: '/assets/avatar.jpg',
summary: 'A Business Intelligence Analyst with strong skills in interpreting and analyzing data...',
certifications: ['Power BI', 'PSM I'],
experienceYears: [
{ label: 'Business Intelligence', value: 9 },
{ label: 'Business Analyst', value: 3.5 },
{ label: 'IT Helpdesk', value: 2.5 },
{ label: 'Total', value: 15 }
],
industries: [
{ name: 'Real Estate', value: 4.5 },
{ name: 'Tourism', value: 4.5 },
{ name: 'Consumer Goods', value: 3.5 },
{ name: 'Technology', value: 2.5 }
],
skills: [
{ name: 'SQL (Data Querying)', value: 5 },
{ name: 'Power BI Desktop', value: 3.5 },
{ name: 'Microstrategy', value: 2 },
{ name: 'Power BI Service', value: 2 },
{ name: 'Tableau Desktop', value: 1 }
],
locations: [
{ name: 'Singapore', value: 60 },
{ name: 'Philippines', value: 40 }
],
sampleWorks: ['/assets/sample1.png','/assets/sample2.png','/assets/sample3.png']
};


await Resume.create(sample);
console.log('Seed complete');
process.exit(0);
}).catch(err => console.error(err));
const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');


// Get the first resume document
router.get('/', async (req, res) => {
try {
const resume = await Resume.findOne().lean();
if (!resume) return res.json({ message: 'No resume found' });
res.json(resume);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// Create / update resume (saves the provided JSON)
router.post('/', async (req, res) => {
try {
const payload = req.body;
let resume = await Resume.findOne();
if (resume) {
Object.assign(resume, payload);
await resume.save();
} else {
resume = await Resume.create(payload);
}
res.json(resume);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


module.exports = router;
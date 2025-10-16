require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const resumeRoutes = require('./routes/resume');


const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));


app.use('/api/resume', resumeRoutes);


const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
}).then(() => {
console.log('MongoDB connected');
app.listen(PORT, () => console.log('Server running on port', PORT));
}).catch(err => console.error(err));
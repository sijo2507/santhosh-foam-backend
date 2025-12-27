const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const productRoutes = require('./routes/products');

const app = express();

app.use(cors({
  origin: [
    "https://www.santhoshfoam.com",
    "https://santhoshfoam.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Backend running!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

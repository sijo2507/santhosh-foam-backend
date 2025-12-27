const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const productRoutes = require('./routes/products');

const app = express();
app.set("trust proxy", true); // IMPORTANT for Render

// 🔁 Force HTTPS + www (SEO)
app.use((req, res, next) => {
  const host = req.headers.host;
  const protocol = req.headers["x-forwarded-proto"] || req.protocol;

  if (protocol !== "https") {
    return res.redirect(301, `https://${host}${req.originalUrl}`);
  }

  if (!host.startsWith("www.")) {
    return res.redirect(301, `https://www.${host}${req.originalUrl}`);
  }

  next();
});

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Backend running!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/servicesRoutes');
const bookingRoutes = require('./routes/bookingRoutes');


// ✅ Initialize app first
const app = express();

// ✅ Then use middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// ✅ Use routes
app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api', bookingRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connected to DB 🚀`);
    console.log(`Server running at http://localhost:${PORT}`);
  } catch (err) {
    console.error('DB Connection Failed ❌', err);
  }
});

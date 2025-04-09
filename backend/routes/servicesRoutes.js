const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.post('/add', serviceController.addService);
router.put('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);
router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getServiceById);

module.exports = router;

// Dummy GET endpoint to test
router.get('/', (req, res) => {
  res.send('Service routes working ✅');
});

module.exports = router;

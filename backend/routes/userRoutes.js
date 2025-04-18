const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.get('/:id', userController.getUser);
router.get('/', userController.getAllUsers);
router.delete('/:id', userController.deleteUser);

module.exports = router;

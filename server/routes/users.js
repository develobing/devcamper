const express = require('express');
const router = express.Router({ mergeParams: true });
const User = require('../models/User');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controller/users');

// Any route in this file is protect by checking token
router.use(protect);
// Any route in this file is authorized only for admin
router.use(authorize('admin'));

router
  .route('/')
  .get(advancedResults(User), getUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;

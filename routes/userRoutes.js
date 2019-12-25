const express = require('express');

const router = express.Router();

router.post('/signup', (req, res) => {
  res.json({
    status: 'signup success'
  });
});

router.post('/login', (req, res) => {
  res.json({
    status: 'login success'
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
    const { userId, email, tokenAplic } = req.body;

    res.status(201).json({
        code: '00',
        message: null,
        token: 'this-is-the-user-token'
    });
});

module.exports = router;
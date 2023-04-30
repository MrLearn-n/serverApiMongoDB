const { Router } = require('express');
const router = Router();

router.post('auth/reqistration', async (req, res) => {
    try {
        const {email, password} = req.body;

    } catch (error) {
        res.status(500).json({
            message: "err",
        })
    }
})

router.post('auth/login', async (req, res) => {
    
})

router.get('auth/me', (res, req) => {
    
})

module.exports = router;
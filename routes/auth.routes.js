const {Router} = require('express');
const router = Router();

router.post('/reqistration', async (req, res) => {
    try {
        const {email, password} = req.body;

    } catch (error) {
        res.status(500).json({
            message: "err",
        })
    }
})

router.post('/login', async (req, res) => {
    
})

router.get('/login', (res, req) => {
    console.log('er')
})

module.exports = router;
const router = require('express').Router();

router.get('/', async(req, res) => {
    res.send('get works');
});

router.get('/:id', async(req, res) => {
    res.send(`get by objective-id works - "${req.params.id}"`);
});

router.post('/', async(req, res) => {
    res.status(201).send('post works');
});

module.exports = router;
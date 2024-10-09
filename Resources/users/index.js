const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.send('Listado de todos los users');
})

router.get('/:id', (request, response) => {

    const { id } = request.params;
    response.send(`User con ID ${id}`);
})

module.exports = router;

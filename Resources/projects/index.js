const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.send('Hola desde projects');
})

router.post('/', (request, response) => {
    response.send('Hola desde POST projects');
})

router.put('/', (request, response) => {
    response.send('Hola desde PUT projects');
})

router.delete('/', (request, response) => {
    response.send('Hola desde DELETE projects');
})

module.exports = router
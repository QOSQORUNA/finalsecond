var express = require('express');
var router = express.Router();

var jwt = require('jwt-simple');
var payload = {}; // datos de usuario ;v
var secret = '$2y$12$RM3QIuN.9P/KUb4fugZPru0cZ3Sn14r9ajUzWFPzyBGtOxPGjsiE2';
var authMiddleware = require('../../middleware');

const pedidos = [{
        id: 1,
        name: 'Fernando Lovaton',
        productos: [1, 2, 3]
    },
    {
        id: 2,
        name: 'Jose Lovaton',
        productos: [1]
    },
    {
        id: 3,
        name: 'Angel Lovaton ',
        productos: [3]
    },
]

router.get('/auth/token', function(req, res) {
    var token = jwt.encode(payload, secret);
    res.json(token);
});

router.get('/pedidos', [authMiddleware], function(req, res) {
    res.status(200).json({
        content: pedidos
    });
});


router.post('/pedidos', [authMiddleware], function(req, res) {

    // aea ;v
    var nombre = req.body.nombre;
    var productos = req.body['productos[]'];


    console.log(req.body);

    pedidos.push({
        id: (new Date()).getTime(),
        name: nombre,
        productos: productos
    })

    res.status(201).json({
        content: pedidos
    });


});

// 



module.exports = router;
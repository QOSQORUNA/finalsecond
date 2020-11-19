var express = require('express');
var router = express.Router();

var jwt = require('jwt-simple');
var payload = {}; // datos de usuario ;v
var secret = '$2y$12$RM3QIuN.9P/KUb4fugZPru0cZ3Sn14r9ajUzWFPzyBGtOxPGjsiE2';
var authMiddleware = require('../../middleware');

const pedidos = [{
        id: 1,
        name: 'Fernando Lovaton',
        productos: [1, 2, 3],
        monto: 50
    },
    {
        id: 2,
        name: 'Jose Lovaton',
        productos: [1],
        monto: 5
    },
    {
        id: 3,
        name: 'Angel Lovaton ',
        productos: [3],
        monto: 10
    },
]

// router.get('/auth/token', function(req, res) {
//     var token = jwt.encode(payload, secret);
//     res.json(token);
// });

// router.get('/pedidos', [authMiddleware], function(req, res) {
//     res.status(200).json({
//         content: pedidos
//     });
// });
router.get('/pedidos', function(req, res) {
    res.status(200).json({
        content: pedidos
    });
});


router.post('/pedidos', function(req, res) {


    var nombre = req.body.nombre;
    var productos = req.body['productos[]'];
    var monto = req.body.monto;


    console.log(req.body);

    pedidos.push({
        id: (new Date()).getTime(),
        name: nombre,
        productos: productos,
        monto: monto
    })

    res.status(201).json({
        content: pedidos
    });


});

// 



module.exports = router;
;
const express = require('express')
let api = express.Router(),
  pruebaControl = require('../controles/prueba')

api.get('/prueba', pruebaControl.prueba)
api.get('/prueba1', pruebaControl.prueba1)
api.post('/prueba1', pruebaControl.prueba1)

api.get('/ruta_deber', pruebaControl.getDatos)
api.post('/ruta_deber', pruebaControl.postDatos)

module.exports = api
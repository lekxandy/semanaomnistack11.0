const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentConstroller')
const ProfileConstroller = require('./controllers/ProfileConstroller')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.post('/ongs', OngController.create)
routes.get('/ongs', OngController.list)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.list)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileConstroller.index)

module.exports = routes
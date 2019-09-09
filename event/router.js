const { Router } = require('express')
const Event = require('./model')

const router = new Router()

router.post('/event', (req, res, next) => {
  Event
    .create(req.body)
    .then(event => res.send(event))
    .catch(next)
})

router.get('/event', (req, res, next) => {
  Event
    .findAll()
    .then(events => res.send(events))
    .catch(next)
})

router.get('/event/:id', (req, res, next) => {
  Event
    .findByPk(req.params.id)
    .then(event => res.send(event))
    .catch(next)
})

router.put('/event/:id', (req, res, next) => {
  Event
    .findByPk(req.params.id)
    .then(event => {
      event.update(req.body)
    })
    .then((updatedEvent) => res.send(updatedEvent))
    .catch(next)
})

router.delete(
  '/event/:id',
  (request, response, next) => Event
    .destroy({ where: { id: request.params.id }})
    .then(deletedEventsCount => response.send({ deletedEventsCount }))
    .catch(next)
)

module.exports = router
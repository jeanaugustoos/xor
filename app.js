const Hapi = require('hapi')
const Joi = require('joi')
const Boom = require('boom')
const perceptron = require('./perceptron')

const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: process.env.PORT || '8080'
})

server.route([
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply({ success: 'ok' })
    },
  },
  {
    method: 'POST',
    path: '/xor',
    handler: (request, reply) => {
      const xor = perceptron.activate(
        request.payload.first,
        request.payload.second
      )
      reply(xor)
    },
    config: {
      validate: {
        payload: {
          first: Joi
            .number()
            .valid([0, 1])
            .error(Boom.badRequest('invalid parameter: first')),

          second: Joi
            .number()
            .valid([0, 1])
            .error(Boom.badRequest('invalid parameter: second')),
        }
      }
    }
  }
])

if (!module.parent) {
  server.start((error) => {
    if (error) {
      throw error
    }

    console.log(`Server running at ${server.info.uri}`)
  })
}

module.exports = server

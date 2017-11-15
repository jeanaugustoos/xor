const { Architect, Trainer } = require('synaptic')

const activate = (first, second) => {
  const perceptron = new Architect.Perceptron(2,117,1)
  const trainer = new Trainer(perceptron)

  trainer.XOR()

  return perceptron.activate([first, second])
}

module.exports = {
  activate
}

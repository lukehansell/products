const { send } = require('micro')
module.exports = async (req, res) => {
  send(res, 200, [{
    name: 'foo',
    price: 12345,
    chunk: 'foo'
  }, {
    name: 'bar',
    price: 54321,
    chunk: 'bar'
  }])
}

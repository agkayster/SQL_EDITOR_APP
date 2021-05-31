const Product = require('../models/Product')

function indexRoute(req, res, next) {
  Product.find(req.query)
    .then((products) => res.json(products))
    .catch(next)
}

function showRoute(req, res, next) {
  Product.findById(req.params.id) 
    .then((product) => {
      if (!product) return res.sendStatus(404) 

      return res.json(product) 
    })
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute
}

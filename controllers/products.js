const Product = require('../models/Product');

function indexRoute(req, res, next) {
	Product.find(req.query)
		.then((products) => res.json(products))
		.catch(next);
}

function showRoute(req, res, next) {
	Product.findById(req.params.id) // get the station from the database:MONGOOSE
		.then((product) => {
			if (!product) return res.sendStatus(404); //404 means not found

			return res.json(product); //send it to JSON:EXPRESS
		})
		.catch(next);
}

module.exports = {
	index: indexRoute,
	show: showRoute,
};

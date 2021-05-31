const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    productID: { type: Number, required: true },
    productName: { type: String, required: true },
    supplierID: { type: Number, required: true },
    categoryID: { type: Number, required: true },
    quantityPerUnit: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    unitsInStock: { type: Number, required: true },
    unitsOnOrder: { type: Number, required: true },
    reorderLevel: { type: Number, required: true },
    discontinued: { type: Number, required: true }
  },
  {
    toJSON: {
      virtuals: true,
      transform(doc, json) {
        delete json.__v
        delete json.id
        return json
      }
    }
  }
)
module.exports = mongoose.model('Product', productSchema)

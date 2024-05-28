const { Schema } = require('mongoose')

const CuisineSchema = new Schema(
  {
    origin: { type: String, required: true },
    vegetarian: { type: Boolean, required: true },
    glutenfree: {type: Boolean, required: true},
  },
  { timestamps: true }
)

module.exports = CuisineSchema;
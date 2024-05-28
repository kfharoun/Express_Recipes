const { Schema } = require('mongoose')

const DirectionSchema = new Schema(
  {
    ingredients: { type: String, required: true },
    directions: { type: String, required: true },
    nutritionFacts: {type: String, required: true},
    recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' },
  },
  { timestamps: true }
)

module.exports = DirectionSchema;
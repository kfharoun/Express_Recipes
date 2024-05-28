const { Schema } = require('mongoose')

const RecipeSchema = new Schema(
  {
    name: { type: String, required: true },
    difficulty: { type: String, required: true },
    totalTime: {type: String, required: true},
    servings: {type: Number, required: true},
    cusine: { type: Schema.Types.ObjectId, ref: 'Cusine' },
  },
  { timestamps: true }
)

module.exports = RecipeSchema
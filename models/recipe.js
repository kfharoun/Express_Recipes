const { Schema } = require('mongoose')

const RecipeSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    characterName: {type: String, required: true},
    age: {type: Number, required: true},
    died: {type: Boolean, required: true}
  },
  { timestamps: true }
)

module.exports = RecipeSchema
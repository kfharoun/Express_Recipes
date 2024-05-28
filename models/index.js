const mongoose =  require('mongoose');
const CuisineSchema = require('./cuisineType');
const DirectionSchema = require('./direction');
const RecipeSchema = require('./recipe');

const Cuisine = mongoose.model('Cuisine', CuisineSchema);
const Direction = mongoose.model('Direction', DirectionSchema);
const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = {
    Cuisine, 
    Direction,
    Recipe
}
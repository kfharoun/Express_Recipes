const db = require('../db')
const { Cuisine } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  try {
    const cuisineTypes = [
      {
        origin: 'Middle Eastern',
        vegetarian: true,
        glutenFree: true
      },
      {
        origin: 'Italian',
        vegetarian: false,
        glutenFree: false
      },
      {
        origin: 'Mexican',
        vegetarian: false,
        glutenFree: false
      },
      {
        origin: 'Indian',
        vegetarian: true,
        glutenFree: false
      },
      {
        origin: 'Chinese',
        vegetarian: false,
        glutenFree: true
      }
    ]

    await Cuisine.insertMany(cuisineTypes)
    console.log('Created Cuisine Types!')
  } catch (error) {
    console.error('Error creating Cuisine Types:', error);
  } finally {
    db.close()
  }
}
main()

const db = require('../db')
const { Cuisine } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  try {
    const cuisineTypes = [
      {
        origin: 'Middle Eastern',
        vegetarian: true,
        glutenfree: true
      },
      {
        origin: 'Italian',
        vegetarian: false,
        glutenfree: false
      },
      {
        origin: 'Mexican',
        vegetarian: false,
        glutenfree: false
      },
      {
        origin: 'Indian',
        vegetarian: true,
        glutenfree: false
      },
      {
        origin: 'Chinese',
        vegetarian: false,
        glutenfree: true
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

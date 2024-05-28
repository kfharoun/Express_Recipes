
const db = require('../db')
const { Cuisine, Recipe } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  try {
    const middleEastern = await Cuisine.findOne({ origin: 'Middle Eastern' })
    const italian = await Cuisine.findOne({ origin: 'Italian' })
    const mexican = await Cuisine.findOne({ origin: 'Mexican' })
    const indian = await Cuisine.findOne({ origin: 'Indian' })
    const chinese = await Cuisine.findOne({ origin: 'Chinese' })


    const recipes = [
      {
        name: 'Lemon Tahini Dressing',
        difficulty: 'Beginner',
        totalTime: '5 mins',
        servings: 6,
        cuisineType: middleEastern._id
      },
      {
        name: 'Spaghetti Carbonara',
        difficulty: 'Intermediate',
        totalTime: '30 mins',
        servings: 4,
        cuisineType: italian._id
      },
      {
        name: 'Tacos al Pastor',
        difficulty: 'Intermediate',
        totalTime: '45 mins',
        servings: 4,
        cuisineType: mexican._id
      },
      {
        name: 'Chicken Tikka Masala',
        difficulty: 'Intermediate',
        totalTime: '40 mins',
        servings: 4,
        cuisineType: indian._id
      },
      {
        name: 'Kung Pao Chicken',
        difficulty: 'Intermediate',
        totalTime: '30 mins',
        servings: 4,
        cuisineType: chinese._id
      }
    ]

    await Recipe.insertMany(recipes)
    console.log('Created Recipes!')
  } catch (error) {
    console.error('Error creating Recipes:', error)
  } finally {
    db.close()
  }
}

main()

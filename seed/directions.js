// directionsSeeder.js
const db = require('../db')
const { Recipe, Direction } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  try {
    const lemonTahiniDressing = await Recipe.findOne({ name: 'Lemon Tahini Dressing' })
    const spaghettiCarbonara = await Recipe.findOne({ name: 'Spaghetti Carbonara' })
    const tacosAlPastor = await Recipe.findOne({ name: 'Tacos al Pastor' })
    const chickenTikkaMasala = await Recipe.findOne({ name: 'Chicken Tikka Masala' })
    const kungPaoChicken = await Recipe.findOne({ name: 'Kung Pao Chicken' })

 
    const directions = [
      {
        ingredients: '½ lemon, juiced, 3 tablespoons tahini paste, 2 tablespoons olive oil, 2 tablespoons water, 1 clove garlic, roughly chopped, ½ teaspoon salt, ¼ teaspoon freshly ground black pepper',
        directions: 'Combine lemon juice, tahini, olive oil, water, garlic, salt, and pepper in a mini food processor or blender; process until smooth.',
        nutritionFacts: '89 calories, 9g fat, 3g carbs, 1g protein',
        recipe: lemonTahiniDressing._id
      },
      {
        ingredients: '8 ounces spaghetti, 2 large eggs, ½ cup grated Pecorino Romano cheese, 4 slices pancetta or bacon, chopped, 2 cloves garlic, minced, Salt and freshly ground black pepper, to taste, Chopped fresh parsley leaves, for garnish',
        directions: 'In a large pot of boiling salted water, cook pasta according to package instructions; reserve 1 cup water and drain well. In a small bowl, whisk together eggs and Pecorino Romano; set aside. Heat a large skillet over medium high heat. Add pancetta and cook until brown and crispy, about 6-8 minutes; reserve excess fat. Stir in garlic until fragrant, about 1 minute. Reduce heat to low. Working quickly, stir in pasta and egg mixture, and gently toss to combine; season with salt and pepper, to taste. Add reserved pasta water, one tablespoon at a time, until desired consistency is reached. Serve immediately, garnished with parsley, if desired.',
        nutritionFacts: '549 calories, 21.4g fat, 58.1g carbs, 29.1g protein',
        recipe: spaghettiCarbonara._id
      },
      {
        ingredients: 'For the pork: 1 (2-pound) boneless pork shoulder, 4 cloves garlic, peeled, Juice of 3 limes, 1/2 cup orange juice, 1/4 cup white vinegar, 2 chipotles in adobo, Kosher salt and freshly ground black pepper, to taste, 2 tablespoons vegetable oil, For the pineapple: 1 pineapple, peeled, cored, and cut into rings, 2 tablespoons vegetable oil, 2 teaspoons chili powder, 1 teaspoon cumin, 1 teaspoon garlic powder, Kosher salt and freshly ground black pepper, to taste, For serving: 16 small corn tortillas, warmed, 1/2 cup chopped fresh cilantro leaves, 1/4 cup diced red onion, 1 lime, cut into wedges',
        directions: 'To make the pork, combine pork shoulder, garlic, lime juice, orange juice, vinegar, chipotles, salt and pepper in a large bowl. Cover and refrigerate for at least 1 hour to overnight, turning the pork occasionally. Preheat oven to 375 degrees F (190 degrees C). Heat vegetable oil in a large oven-proof skillet over medium high heat. Add pork shoulder and sear on all sides until golden brown, about 2-3 minutes per side. Transfer to oven and roast until it reaches an internal temperature of 145 degrees F (63 degrees C), about 25-30 minutes. Let rest for 10 minutes before slicing or chopping into bite-sized pieces. To make the pineapple, preheat grill to medium heat. Brush pineapple rings with vegetable oil; season with chili powder, cumin, garlic powder, salt and pepper, to taste. Add to grill and cook until grill marks appear and pineapple is heated through, about 2-3 minutes per side. Serve pork in tortillas, topped with pineapple, cilantro, red onion and a squeeze of lime.',
        nutritionFacts: '438 calories, 12.9g fat, 47.4g carbs, 31.4g protein',
        recipe: tacosAlPastor._id
      },
      {
        ingredients: 'For the chicken marinade: 1 cup plain yogurt, 2 tablespoons lemon juice, 2 teaspoons ground cumin, 2 teaspoons ground red pepper, 2 teaspoons ground black pepper, 1 teaspoon cinnamon, 2 teaspoons salt, 4 boneless, skinless chicken breasts, cut into bite-sized pieces, For the sauce: 1 tablespoon butter, 2 cloves garlic, minced, 1 jalapeno pepper, finely chopped, 2 teaspoons ground coriander, 1 teaspoon ground cumin, 1 teaspoon paprika, 1 teaspoon garam masala, 1 (15-ounce) can tomato sauce, 1 cup heavy cream, 1/4 cup chopped fresh cilantro leaves, Kosher salt and freshly ground black pepper, to taste, Cooked rice, for serving',
        directions: 'To make the chicken marinade, combine yogurt, lemon juice, cumin, red pepper, black pepper, cinnamon, and salt in a large bowl. Add chicken and toss to coat. Cover and refrigerate for at least 1 hour to overnight. Preheat oven to 400°F (200°C). Thread marinated chicken onto skewers and place on a baking sheet. Bake until chicken is cooked through and slightly charred, about 20-25 minutes. To make the sauce, melt butter in a large skillet over medium heat. Add garlic and jalapeno, and cook, stirring frequently, until fragrant, about 1-2 minutes. Stir in coriander, cumin, paprika, and garam masala until fragrant, about 1 minute. Whisk in tomato sauce and heavy cream. Simmer until sauce has thickened, about 5 minutes. Season with salt and pepper to taste. Stir in cooked chicken and cilantro until heated through. Serve over rice, if desired.',
        nutritionFacts: '423 calories, 22.5g fat, 10.4g carbs, 45.5g protein',
        recipe: chickenTikkaMasala._id
      },
      {
        ingredients: 'For the marinade: 3 tablespoons soy sauce, 2 tablespoons dry sherry, 2 teaspoons cornstarch, For the sauce: 1/4 cup chicken stock, 2 tablespoons soy sauce, 1 tablespoon hoisin sauce, 1 tablespoon cornstarch, 1 tablespoon rice vinegar, 1 tablespoon sugar, 1 tablespoon vegetable oil, 1 tablespoon minced garlic, 1 tablespoon minced ginger, 1/2 teaspoon crushed red pepper flakes, 1/2 cup unsalted dry roasted peanuts, 3 green onions, thinly sliced, 2 large boneless, skinless chicken breasts, cut into 1-inch cubes, Cooked white rice, for serving',
        directions: 'In a medium bowl, whisk together soy sauce, sherry, and cornstarch. Add chicken and toss to coat. Let marinate for 15 minutes. In a small bowl, whisk together chicken stock, soy sauce, hoisin sauce, cornstarch, rice vinegar, and sugar; set aside. Heat vegetable oil in a large skillet over medium high heat. Add garlic, ginger, and red pepper flakes, and cook, stirring constantly, until fragrant, about 1 minute. Add chicken and cook until golden and cooked through, about 4-5 minutes. Stir in sauce mixture and cook, stirring constantly, until thickened, about 2-3 minutes. Stir in peanuts and green onions. Serve immediately over cooked rice.',
        nutritionFacts: '460 calories, 21.5g fat, 19.3g carbs, 48.6g protein',
        recipe: kungPaoChicken._id
      }
    ]

    await Direction.insertMany(directions)
    console.log('Created Directions!')
  } catch (error) {
    console.error('Error creating Directions:', error)
  } finally {
    db.close()
  }
}

main()

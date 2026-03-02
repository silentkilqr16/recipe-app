const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const recipes = [
  {
    id: 1,
    name: "Pasta Carbonara",
    category: "Dinner",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 eggs",
      "50g parmesan",
      "Salt & pepper"
    ],
    steps: [
      "Step 1: Boil pasta until al dente.",
      "Step 2: Fry pancetta until crispy.",
      "Step 3: Whisk eggs with parmesan.",
      "Step 4: Mix pasta with pancetta, remove from heat.",
      "Step 5: Quickly stir in egg mixture, season, and serve."
    ]
  },
  {
    id: 2,
    name: "Pancakes",
    category: "Breakfast",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "1 cup flour",
      "1 cup milk",
      "1 egg",
      "1 tbsp sugar",
      "1 tsp baking powder"
    ],
    steps: [
      "Step 1: Mix dry ingredients in a bowl.",
      "Step 2: Whisk in milk and egg until smooth.",
      "Step 3: Heat pan and pour batter.",
      "Step 4: Cook until bubbles form, flip, and serve."
    ]
  },
  {
    id: 3,
    name: "Caesar Salad",
    category: "Lunch",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Lettuce",
      "Croutons",
      "Parmesan",
      "Caesar dressing",
      "Grilled chicken"
    ],
    steps: [
      "Step 1: Chop lettuce and place in bowl.",
      "Step 2: Add croutons and parmesan.",
      "Step 3: Grill chicken and slice.",
      "Step 4: Toss everything with Caesar dressing."
    ]
  },
  {
    id: 4,
    name: "Chocolate Cake",
    category: "Dessert",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "1 cup flour",
      "1/2 cup cocoa powder",
      "1 cup sugar",
      "2 eggs",
      "1/2 cup butter"
    ],
    steps: [
      "Step 1: Mix dry ingredients.",
      "Step 2: Add eggs and melted butter.",
      "Step 3: Pour into baking tin.",
      "Step 4: Bake at 180°C for 30 minutes."
    ]
  },
  {
    id: 5,
    name: "Grilled Cheese Sandwich",
    category: "Snack",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "2 slices bread",
      "Cheddar cheese",
      "Butter"
    ],
    steps: [
      "Step 1: Butter bread slices.",
      "Step 2: Place cheese between slices.",
      "Step 3: Grill until golden brown."
    ]
  },
  {
    id: 6,
    name: "Veggie Stir Fry",
    category: "Dinner",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Mixed vegetables",
      "Soy sauce",
      "Garlic",
      "Olive oil"
    ],
    steps: [
      "Step 1: Chop vegetables.",
      "Step 2: Heat oil and garlic.",
      "Step 3: Stir fry veggies.",
      "Step 4: Add soy sauce and serve."
    ]
  },
  {
    id: 7,
    name: "Fruit Smoothie",
    category: "Breakfast",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Banana",
      "Strawberries",
      "Milk",
      "Honey"
    ],
    steps: [
      "Step 1: Add fruits to blender.",
      "Step 2: Pour in milk.",
      "Step 3: Blend until smooth.",
      "Step 4: Add honey and serve chilled."
    ]
  },
  {
    id: 8,
    name: "Tacos",
    category: "Lunch",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Taco shells",
      "Ground beef",
      "Lettuce",
      "Cheese",
      "Salsa"
    ],
    steps: [
      "Step 1: Cook ground beef with spices.",
      "Step 2: Fill taco shells with beef.",
      "Step 3: Add lettuce, cheese, and salsa."
    ]
  },
  {
    id: 9,
    name: "Omelette",
    category: "Breakfast",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "2 eggs",
      "Onion",
      "Tomato",
      "Cheese",
      "Salt & pepper"
    ],
    steps: [
      "Step 1: Beat eggs with salt and pepper.",
      "Step 2: Pour into hot pan.",
      "Step 3: Add onion, tomato, and cheese.",
      "Step 4: Fold and serve."
    ]
  },
  {
    id: 10,
    name: "Pizza Margherita",
    category: "Dinner",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella",
      "Basil"
    ],
    steps: [
      "Step 1: Spread tomato sauce on dough.",
      "Step 2: Add mozzarella slices.",
      "Step 3: Bake at 220°C for 15 minutes.",
      "Step 4: Garnish with basil and serve."
    ]
  },
  {
  id: 11,
  name: "Butter Chicken",
  category: "Dinner",
  image: "https://via.placeholder.com/300",
  ingredients: ["500g chicken", "Butter", "Tomato puree", "Cream", "Spices"],
  steps: [
    "Step 1: Marinate chicken with spices.",
    "Step 2: Cook chicken in butter.",
    "Step 3: Add tomato puree and simmer.",
    "Step 4: Stir in cream and serve."
  ]
},
{
  id: 12,
  name: "French Toast",
  category: "Breakfast",
  image: "https://via.placeholder.com/300",
  ingredients: ["Bread slices", "Eggs", "Milk", "Sugar", "Cinnamon"],
  steps: [
    "Step 1: Whisk eggs, milk, sugar, and cinnamon.",
    "Step 2: Dip bread slices in mixture.",
    "Step 3: Fry until golden brown.",
    "Step 4: Serve with syrup."
  ]
},
{
  id: 13,
  name: "Greek Salad",
  category: "Lunch",
  image: "https://via.placeholder.com/300",
  ingredients: ["Cucumber", "Tomatoes", "Feta cheese", "Olives", "Olive oil"],
  steps: [
    "Step 1: Chop cucumber and tomatoes.",
    "Step 2: Add feta and olives.",
    "Step 3: Drizzle with olive oil.",
    "Step 4: Toss and serve."
  ]
},
{
  id: 14,
  name: "Brownies",
  category: "Dessert",
  image: "https://via.placeholder.com/300",
  ingredients: ["Flour", "Cocoa powder", "Sugar", "Butter", "Eggs"],
  steps: [
    "Step 1: Mix dry ingredients.",
    "Step 2: Add butter and eggs.",
    "Step 3: Pour into tray.",
    "Step 4: Bake at 180°C for 25 minutes."
  ]
},
{
  id: 15,
  name: "Spring Rolls",
  category: "Snack",
  image: "https://via.placeholder.com/300",
  ingredients: ["Spring roll wrappers", "Vegetables", "Soy sauce", "Oil"],
  steps: [
    "Step 1: Prepare vegetable filling.",
    "Step 2: Wrap filling in wrappers.",
    "Step 3: Deep fry until golden.",
    "Step 4: Serve with sauce."
  ]
},
{
  id: 16,
  name: "Biryani",
  category: "Dinner",
  image: "https://via.placeholder.com/300",
  ingredients: ["Basmati rice", "Chicken", "Spices", "Yogurt", "Onions"],
  steps: [
    "Step 1: Cook rice with spices.",
    "Step 2: Prepare chicken masala.",
    "Step 3: Layer rice and chicken.",
    "Step 4: Steam and serve."
  ]
},
{
  id: 17,
  name: "Avocado Toast",
  category: "Breakfast",
  image: "https://via.placeholder.com/300",
  ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Lemon juice"],
  steps: [
    "Step 1: Toast bread.",
    "Step 2: Mash avocado with seasoning.",
    "Step 3: Spread on toast.",
    "Step 4: Garnish and serve."
  ]
},
{
  id: 18,
  name: "Club Sandwich",
  category: "Lunch",
  image: "https://via.placeholder.com/300",
  ingredients: ["Bread", "Chicken", "Lettuce", "Tomato", "Mayonnaise"],
  steps: [
    "Step 1: Toast bread slices.",
    "Step 2: Layer chicken, lettuce, tomato.",
    "Step 3: Add mayonnaise.",
    "Step 4: Cut and serve."
  ]
},
{
  id: 19,
  name: "Cheesecake",
  category: "Dessert",
  image: "https://via.placeholder.com/300",
  ingredients: ["Cream cheese", "Sugar", "Eggs", "Butter", "Biscuits"],
  steps: [
    "Step 1: Crush biscuits for base.",
    "Step 2: Mix cream cheese, sugar, eggs.",
    "Step 3: Pour over base.",
    "Step 4: Bake and chill."
  ]
},
{
  id: 20,
  name: "Nachos",
  category: "Snack",
  image: "https://via.placeholder.com/300",
  ingredients: ["Tortilla chips", "Cheese", "Salsa", "Jalapenos"],
  steps: [
    "Step 1: Arrange chips on tray.",
    "Step 2: Add cheese and toppings.",
    "Step 3: Bake until cheese melts.",
    "Step 4: Serve hot."
  ]
},
{
  id: 21,
  name: "Dal Tadka",
  category: "Dinner",
  image: "https://via.placeholder.com/300",
  ingredients: ["Lentils", "Onion", "Tomato", "Spices", "Ghee"],
  steps: [
    "Step 1: Cook lentils until soft.",
    "Step 2: Prepare onion-tomato masala.",
    "Step 3: Mix with lentils.",
    "Step 4: Add ghee tadka and serve."
  ]
},
{
  id: 22,
  name: "Smoothie Bowl",
  category: "Breakfast",
  image: "https://via.placeholder.com/300",
  ingredients: ["Banana", "Berries", "Yogurt", "Granola"],
  steps: [
    "Step 1: Blend fruits with yogurt.",
    "Step 2: Pour into bowl.",
    "Step 3: Top with granola and berries.",
    "Step 4: Serve chilled."
  ]
},
{
  id: 23,
  name: "Falafel Wrap",
  category: "Lunch",
  image: "https://via.placeholder.com/300",
  ingredients: ["Falafel", "Pita bread", "Lettuce", "Tahini sauce"],
  steps: [
    "Step 1: Warm pita bread.",
    "Step 2: Add falafel and lettuce.",
    "Step 3: Drizzle tahini sauce.",
    "Step 4: Wrap and serve."
  ]
},
{
  id: 24,
  name: "Ice Cream Sundae",
  category: "Dessert",
  image: "https://via.placeholder.com/300",
  ingredients: ["Ice cream", "Chocolate syrup", "Nuts", "Whipped cream"],
  steps: [
    "Step 1: Scoop ice cream into bowl.",
    "Step 2: Add syrup and nuts.",
    "Step 3: Top with whipped cream.",
    "Step 4: Serve immediately."
  ]
},
{
  id: 25,
  name: "Pakoras",
  category: "Snack",
  image: "https://via.placeholder.com/300",
  ingredients: ["Gram flour", "Vegetables", "Spices", "Oil"],
  steps: [
    "Step 1: Mix gram flour with spices.",
    "Step 2: Dip vegetables in batter.",
    "Step 3: Deep fry until crispy.",
    "Step 4: Serve with chutney."
  ]
},
{
  id: 26,
  name: "Lasagna",
  category: "Dinner",
  image: "https://via.placeholder.com/300",
  ingredients: ["Lasagna sheets", "Minced meat", "Tomato sauce", "Cheese"],
  steps: [
    "Step 1: Cook meat with sauce.",
    "Step 2: Layer sheets, meat, and cheese.",
    "Step 3: Repeat layers.",
    "Step 4: Bake until golden."
  ]
},
{
  id: 27,
  name: "Scrambled Eggs",
  category: "Breakfast",
  image: "https://via.placeholder.com/300",
  ingredients: ["Eggs", "Butter", "Salt", "Pepper"],
  steps: [
    "Step 1: Beat eggs with salt and pepper.",
    "Step 2: Melt butter in pan.",
    "Step 3: Cook eggs while stirring.",
    "Step 4: Serve hot."
  ]
},
{
  id: 28,
  name: "Chicken Wrap",
  category: "Lunch",
  image: "https://via.placeholder.com/300",
  ingredients: ["Tortilla", "Grilled chicken", "Lettuce", "Sauce"],
  steps: [
    "Step 1: Warm tortilla.",
    "Step 2: Add chicken and lettuce.",
    "Step 3: Drizzle sauce.",
    "Step 4: Wrap and serve."
  ]
}
];

// Root route
app.get("/", (req, res) => {
  res.send("Recipe API is running ✅");
});

// All recipes
app.get("/recipes", (req, res) => {
  res.json(recipes);
});

// Random recipe by category
app.get("/recipe/:category", (req, res) => {
  const category = req.params.category;
  const filtered = recipes.filter(r => r.category.toLowerCase() === category.toLowerCase());

  if (filtered.length === 0) {
    return res.status(404).json({ error: "No recipes found for this category" });
  }

  const random = filtered[Math.floor(Math.random() * filtered.length)];
  res.json(random);
});

// ✅ Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


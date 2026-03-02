import React, { useState } from 'react';
import './App.css';

function App() {
  const [recipe, setRecipe] = useState(null);

  const getRecipe = async (category) => {
    const res = await fetch(`http://localhost:5000/recipe/${category}`);
    const data = await res.json();
    setRecipe(data);
  };

  return (
    <div className="container">
      <h1>🍳 Random Recipe Picker</h1>

      {/* Category Buttons */}
      <div className="categories">
        <button onClick={() => getRecipe("breakfast")}>Breakfast</button>
        <button onClick={() => getRecipe("lunch")}>Lunch</button>
        <button onClick={() => getRecipe("dinner")}>Dinner</button>
        <button onClick={() => getRecipe("dessert")}>Dessert</button>
        <button onClick={() => getRecipe("snack")}>Snack</button>
      </div>

      {recipe && (
        <div className="card">
          <img src={recipe.image} alt={recipe.name} />
          <h2>{recipe.name}</h2>
          <p><strong>Category:</strong> {recipe.category}</p>

          {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 && (
            <>
              <h3>Ingredients</h3>
              <ul className="ingredients">
                {recipe.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {Array.isArray(recipe.steps) && recipe.steps.length > 0 && (
            <>
              <h3>Cooking Steps</h3>
              <ol className="steps">
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

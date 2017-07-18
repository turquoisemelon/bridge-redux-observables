import React, { Component } from 'react';

class RecipeList extends Component {
  render() {
    const { recipeItems } = this.props;
    return <div className="recipe-list">
      {
        recipeItems.map(recipe => <h3 key={recipe.uri}>name: {recipe.label} calories: {recipe.calories}</h3>)
      }
    </div>
  }
}

export default RecipeList;

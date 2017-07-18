import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getRecipeByName } from './actions/recipe.actions';
import { setSearchTerm } from './actions/recipe.actions';

import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeInfo from './components/RecipeInfo';


// remember, props should now have data coming in from redux state!
// because of this, we don't even need to make our 'top level' components stateful!
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { setSearchTerm, getRecipeByName, searchTerm, recipeList, test } = this.props;
    return <div className="App">
      <div className="App-header">
        <h2>Welcome to Recipe Box</h2>
      </div>
      <div>
        <SearchBar onSearchTyped={setSearchTerm} onSearchTermSubmit={getRecipeByName} searchInput={searchTerm} />
      </div>
      <div className="recipe-container">
        <RecipeList recipeItems={recipeList}/>
        <RecipeInfo />
      </div>
    </div>
  }
}


const connectConfig = connect(
  state => ({
    test: 'foo', // how could I potentially apply the value of the reducer on line 6 of reducers/index.js?
    recipeList: state.recipe.list,
    searchTerm: state.recipe.searchTerm,
  }),
  {
    getRecipeByName, // how can we simplify this, do we remember?
    setSearchTerm
  }
);


export default connectConfig(App);

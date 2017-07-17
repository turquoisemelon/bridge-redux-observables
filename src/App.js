import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getRecipeByName } from './redux/actions/recipe.actions';
import { setSearchTerm } from './redux/actions/recipe.actions';


// remember, props should now have data coming in from redux state!
// because of this, we don't even need to make our 'top level' components stateful!
const App = props =>
  (
    <div className="App">
      <div className="App-header">
        {props.test}
        <h2>Welcome to <span className="strike">React</span> Redux-Observable!</h2>
      </div>
      <label>
        <input
          onChange={(event) => props.setSearchTerm(event.target.value)}
          name="searchTerm"
          type="text"
          placeholder="Search"
          required
        />
      </label>
      <button onClick={(event) => {props.getRecipeByName(props.searchTerm)}}>Search</button>
      {props.recipeList.map(recipe => <h3 key={recipe.uri}>name: {recipe.label} calories: {recipe.calories}</h3>)}
    </div>
  );



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

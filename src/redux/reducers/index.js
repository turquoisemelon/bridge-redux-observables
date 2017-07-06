import combineReducers from 'redux/es/combineReducers';
import recipeReducer from './recipe.reducer';


// heres an example of using combineReducers to make a larger reducer! the object it gets represents
// your final global state object, so you can structure this in a way that makes sense
// but keep it as flat as possible!
export default combineReducers({
  recipe: recipeReducer,
  testReducer: (state = 'foobar', action) => state // a boring reducer just to illustrate combine reducer
});

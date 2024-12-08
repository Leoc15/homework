import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeList from './RecipeList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      selectedRecipe: 1
    };

  }

  async componentDidMount() {
    try {
      const r = await fetch('./recipes.json');
      if (!r.ok) {
        throw new Error(`${r.status} - ${r.statusText}`);
      }
      const recipes = await r.json();
      this.setState({
        recipes
      });
    } catch (e) {
      console.error(e);
    }
  }

  recipeSelected = index => {
    this.setState({
      selectedRecipe: index
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('handle submit of', this.state);
    const recipe = {
      id: 200,
      name: e.target.elements.RecipeName.value,
      ingredients: e.target.elements.ingredients.value,
      directions: e.target.elements.directions.value,
      picture: e.target.elements.picSrc.value,
    };
    console.log(this.state.recipes);
    const temp = [...this.state.recipes];
    temp.push(recipe);
    console.log(temp);
    this.setState({ recipes: temp });
  }

  newRecipe() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>recipe name: <input type="text" name="RecipeName" /></div>
        <div>ingredients: <input type="text" name="ingredients" /></div>
        <div>directions: <input type="text" name="directions" /></div>
        <div>picture: <input type="text" name="picSrc" /></div>

        <button>submit</button>
      </form>
    );
  }
  render() {
    const { recipes, selectedRecipe } = this.state;

    const recipeJsx = recipes.length ? <Recipe recipe={recipes[selectedRecipe]} /> : <div>loading...</div>;
    const newRecipe = this.newRecipe();
    return (
      <div className="container text-center">
        <h1>PCS Recipes</h1>
        {newRecipe}
        <RecipeList recipes={recipes} recipeSelectedHandler={this.recipeSelected} />
        <hr />
        {recipeJsx}
      </div>
    )
  }
}

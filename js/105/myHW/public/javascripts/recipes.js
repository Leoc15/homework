/* globals $*/
(async function () {
  'use strict';

  const recipeSelect = $('#recipes');
  const nameElem = $('#name');
  const pictureElem = $('#picture');
  const ingredientsElem = $('#ingredients');
  const hasRecipe = $('.has-recipe');
  const noRecipe = $('.no-recipe');
  let chosenRecipe;


  async function loadJson(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (e) {
      $('#error').text(e.message);
      hasRecipe.hide();
      noRecipe.show();
    }
  }

  async function selectRecipe(e) {
    chosenRecipe = await loadJson(`/myHW/${e.target.value}`);
    if (!chosenRecipe) {
      return;
    }
    noRecipe.hide();
    hasRecipe.show();
    nameElem.text(chosenRecipe.Name);
    pictureElem.attr('src', chosenRecipe.pic);

    ingredientsElem.empty();
    //   recipe.Instructions.forEach(i => {
    ingredientsElem.append(`${chosenRecipe.Instructions}`);
    //   });
  }

  const recipes = await loadJson('/myHW');

  recipes.forEach(recipe => {
    recipeSelect.append(`<option value=${recipe.ID}>${recipe.Name}</option>`);
  });

  recipeSelect.change(selectRecipe);

  const deleteButton = ($('#theDelete'));
  deleteButton.click(async () => {
    console.log('in the delete button')
    console.log(`${chosenRecipe.ID}`)
    try {
      const response = await fetch(`/myHW/${chosenRecipe.ID}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        recipes = recipes.filter(r => r !== chosenRecipe);

        for (let i = 0; i < recipeSelect.options.length; i++) {
          if (recipeSelect.options[i].value === chosenRecipe.ID) {
            recipeSelect.remove(i);
            hasRecipe.hide();
            noRecipe.show();
          }
          chosenRecipe = null;

        }
      }
    } catch (e) {
      console.log('deleted')
    }
  });
}());




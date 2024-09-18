/* global $*/
(function () {
    'use strict';

    const selection = $('#recipes');
    const elemName = $('#name');
    const elemIngreds = $('#ingredients');
    const image = $('#foodPic');
    selection.change(async (ev) => {
        console.log(ev.target.value)
        try {
            const r = await fetch(`${ev.target.value}.json`);
            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText}`);
            }
            const Recipes = await r.json();

            elemName.text(Recipes.name);
            elemIngreds.text(Recipes.ingredients);
            image.attr('src', Recipes.image);

        } catch (e) {
            console.error(e);
        }
    });
})();
import { load_page, catCard } from './homeMeal.js';
import UiDisplayMeal, {} from './uiDisplayMeal.js';
import IDCURRENT, {} from './detailsById.js';
export default class AREACURRENT {

    constructor(cat) {
        this.cat = cat;
    }

    async curent() {
        // load_page.classList.replace('hidden', 'flex');
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.cat}`, {
                method: 'GET',
                cache: 'default',

            });
            const result = await response.json();
            console.log(result.meals);
            //display result
            const display = new UiDisplayMeal();
            display.displayCards(result.meals);

            $(document).ready(function() {
                    load_page.classList.replace('flex', 'hidden');
                })
                //____________________to return any id after pressed on any card________________________
            console.log(catCard.length);

            for (let i = 0; i < catCard.length; i++) {
                catCard[i].addEventListener('click', function(e) {
                    let currentId = result.meals[i].idMeal
                    console.log(i);
                    console.log(currentId);

                    const curent_Id = new IDCURRENT(currentId);
                    curent_Id.curent();

                });
            }
            //________________________________________________________
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }


    }

}
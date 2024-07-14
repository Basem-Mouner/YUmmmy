import { load_page } from './homeMeal.js';
import UiDisplayMeal, {} from './uiDisplayMeal.js';
export default class IDCURRENT {

    constructor(cat) {
        this.cat = cat;
    }

    async curent() {
        load_page.classList.replace('hidden', 'flex');
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.cat}`, {
                method: 'GET',
                cache: 'default',

            });
            const result = await response.json();
            console.log(result.meals[0]);
            //display result
            const display = new UiDisplayMeal();
            display.displayDetailsMeal(result.meals[0]);
            $('.mailDetails').toggleClass('hidden');
            $(document).ready(function() {
                load_page.classList.replace('flex', 'hidden');
            })
            $('#closeINFO').click(function() { $('.mailDetails').toggleClass('hidden'); })
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }


    }


}
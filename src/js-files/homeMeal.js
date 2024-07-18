import UiDisplayMeal, {} from './uiDisplayMeal.js';
import CATCURRENT, {} from './currentCategory.js';
import AREACURRENT, {} from './currentArea.js';
import INGCURRENT, {} from './currenaIngred.js';
import IDCURRENT, {} from './detailsById.js';
import validateInputs, { checkVaild } from './validateInputs.js'
import SEARCH, {} from './searchMeal.js';


export const load_page = document.querySelector('.loadingPage');
export let catCard = document.getElementsByClassName('cardLayout');
let areaCard = document.getElementsByClassName('areaCard');
export default class Home {

    constructor() {
        // this.cat = cat;
    }

    async homeMeal() {

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`, {
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
    async catMeal() {
        $('.mailDetails').addClass('hidden');

        try {
            load_page.classList.replace('hidden', 'flex');
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`, {
                method: 'GET',
                cache: 'default',

            });
            const result = await response.json();
            console.log(result.categories);
            //display result
            const display2 = new UiDisplayMeal();
            display2.displayCatCards(result.categories);

            $(document).ready(function() {
                    load_page.classList.replace('flex', 'hidden');
                })
                //____________________to return any category after pressed on any card________________________

            console.log(catCard.length);

            // $('.cardLayout').click(function(e) { console.log($(this).html); })

            for (let i = 0; i < catCard.length; i++) {
                catCard[i].addEventListener('click', function(e) {
                    let currentCat = result.categories[i].strCategory
                    console.log(i);
                    console.log(`categore : ${currentCat}`);

                    const curent_cat = new CATCURRENT(currentCat);
                    curent_cat.curent();
                    // load_page.classList.replace('d-none', 'd-block');
                    // let currentIdPressed = result[i].id;

                    // let cardDetails = new Details(currentIdPressed);
                    // cardDetails.detailGameByID();
                });
            }

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }


    }
    async areaMeal() {
        $('.mailDetails').addClass('hidden');

        try {
            load_page.classList.replace('hidden', 'flex');
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`, {
                method: 'GET',
                cache: 'default',

            });
            const result = await response.json();
            console.log(result.meals);
            //display result
            const display3 = new UiDisplayMeal();
            display3.displayaAreaCards(result.meals);

            $(document).ready(function() {
                    load_page.classList.replace('flex', 'hidden');
                })
                //____________________to return any category after pressed on any card________________________

            console.log(areaCard.length);

            // $('.cardLayout').click(function(e) { console.log($(this).html); })

            for (let i = 0; i < areaCard.length; i++) {
                areaCard[i].addEventListener('click', function(e) {
                    let currentArea = result.meals[i].strArea;
                    // console.log(i);
                    console.log(`area : ${currentArea}`);

                    const curent_area = new AREACURRENT(currentArea);
                    curent_area.curent();

                });
            }

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }


    }
    async ingredMeal() {
        $('.mailDetails').addClass('hidden');

        try {
            load_page.classList.replace('hidden', 'flex');
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`, {
                method: 'GET',
                cache: 'default',

            });
            const result = await response.json();
            console.log(result.meals);
            //display result
            const display = new UiDisplayMeal();
            display.displayaIngredCards(result.meals);

            $(document).ready(function() {
                    load_page.classList.replace('flex', 'hidden');
                })
                //____________________to return any category after pressed on any card________________________

            console.log(areaCard.length);

            // $('.cardLayout').click(function(e) { console.log($(this).html); })

            for (let i = 0; i < areaCard.length; i++) {
                areaCard[i].addEventListener('click', function(e) {
                    let currentIngred = result.meals[i].strIngredient;
                    // console.log(i);
                    console.log(`area : ${currentIngred}`);

                    const curent_ingred = new INGCURRENT(currentIngred);
                    curent_ingred.curent();
                    // load_page.classList.replace('d-none', 'd-block');
                    // let currentIdPressed = result[i].id;

                    // let cardDetails = new Details(currentIdPressed);
                    // cardDetails.detailGameByID();
                });
            }

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }


    }
    async searchMeal() {
        $('.mailDetails').addClass('hidden');
        console.log($('input').eq(1));
        $('input').eq(0).keyup(function(e) {
            console.log($('input').eq(0).val());
            let nameVal = $('input').eq(0).val();
            const newSearch = new SEARCH(nameVal);
            newSearch.searchByName();
        })
        $('input').eq(1).keyup(function(e) {
            console.log($('input').eq(1).val());
            let letterVal = $('input').eq(1).val();
            if (letterVal == "") { letterVal = 'a' }
            const newSearch = new SEARCH(letterVal);
            newSearch.searchByFirstLetter();
        })

    }
    async formRegix() {
        $('.mailDetails').addClass('hidden');
        console.log($('.contact_us input'));
        $('.contact_us input').keyup(function() {
            validateInputs(this)
            console.log(checkVaild);

            if (checkVaild[0] == true & checkVaild[1] == true & checkVaild[2] == true & checkVaild[3] == true & checkVaild[4] == true & checkVaild[5] == true) {

                document.getElementById('mybtn').disabled = false;
                $('#mybtn').addClass('hover:bg-red-600 ').addClass('hover:text-black')
            } else {
                document.getElementById('mybtn').disabled = true;
                $('#mybtn').removeClass('hover:bg-red-600 ').removeClass('hover:text-black')
            }

        })


    }

}
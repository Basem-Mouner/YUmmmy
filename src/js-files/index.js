import Home, {} from './homeMeal.js';
import closeAnimat, {} from './autoCloseNav.js';
import openAnimat, {} from './autoOpenNav.js';
// let navLeft = $('.nav_bar').offset().left; //{left,top}
let nav_width = $('.nav-list').outerWidth();
//____________________open and close nav bar by open click___________________________
$('#nav_look').click(function() {
    let navLeft = $('.nav_bar').offset().left; //{left,top}
    let nav_width = $('.nav-list').outerWidth();

    console.log(navLeft);
    console.log(nav_width);

    if (Math.round(navLeft) === 0) {
        $('.side_nav').css({ left: `0px`, transition: 'left 1s' });
        openAnimat();

    } else {
        $('.side_nav').css({ left: `-${nav_width}px`, transition: 'left 1s' });
        // $('#nav_look').removeClass('fa-xmark');
        // $('#nav_look').addClass('fa-grip-lines');
        closeAnimat();
    }

});

//________________________-

let home = new Home();
home.homeMeal();

$('.nav-list a').click(function(e) {

    let cat = $(this).attr('href');
    console.log(cat);
    if (cat == '#Categories') {
        $('.side_nav').css({ left: `-${nav_width}px`, transition: 'left 1s' });
        $('.searchMeal').addClass('hidden');
        $('.contact_us').addClass('hidden');
        closeAnimat();
        home.catMeal();
    } else if (cat == '#Area') {
        $('.side_nav').css({ left: `-${nav_width}px`, transition: 'left 1s' });
        $('.searchMeal').addClass('hidden');
        $('.contact_us').addClass('hidden');
        closeAnimat();
        home.areaMeal();
    } else if (cat == '#Ingredients') {
        $('.side_nav').css({ left: `-${nav_width}px`, transition: 'left 1s' });
        $('.searchMeal').addClass('hidden');
        $('.contact_us').addClass('hidden');
        closeAnimat();
        home.ingredMeal();
    } else if (cat == '#Search') {
        $('.side_nav').css({ left: `-${nav_width}px`, transition: 'left 1s' });
        closeAnimat();
        document.getElementById('Cards-home').innerHTML = ``;
        $('.contact_us').addClass('hidden');
        $('.searchMeal').removeClass('hidden');
        home.searchMeal();
    } else if (cat == '#Contact') {
        $('.side_nav').css({ left: `-${nav_width}px`, transition: 'left 1s' });
        closeAnimat();
        document.getElementById('Cards-home').innerHTML = ``;
        $('.contact_us').removeClass('hidden');
        $('form').removeClass('hidden');

        home.formRegix();
    }
});
//___________________________________________________________________________________
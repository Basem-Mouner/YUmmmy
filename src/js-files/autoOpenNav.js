export default function openAnimat() {
    document.querySelector('#nav_look').classList.replace('fa-grip-lines', 'fa-xmark');
    $('.search').animate({ top: '0px', opacity: '100%' }, 1000);
    $('.categ').animate({ top: '0px', opacity: '100%' }, 1100);
    $('.area').animate({ top: '0px', opacity: '100%' }, 1200);
    $('.ingredient').animate({ top: '0px', opacity: '100%' }, 1300);
    $('.contact').animate({ top: '0px', opacity: '100%' }, 1400);
}
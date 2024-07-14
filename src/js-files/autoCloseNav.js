export default function close() {
    document.querySelector('#nav_look').classList.replace('fa-xmark', 'fa-grip-lines');
    $('.contact').animate({ top: '140px', opacity: '0' }, 500);
    $('.ingredient').animate({ top: '130px', opacity: '0' }, 500);
    $('.area').animate({ top: '120px', opacity: '0' }, 500);
    $('.categ').animate({ top: '110px', opacity: '0' }, 500);
    $('.search').animate({ top: '100px', opacity: '0' }, 500);
}
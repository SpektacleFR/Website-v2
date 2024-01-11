/* THANKS TWEMOJI FOR AWESOME EMOJIS! */

$(window).on('load', function () {
    twemoji.parse(document.body, 
        {folder: 'svg', ext: '.svg'} // This is to specify to Twemoji to use SVGs and not PNGs
    );

    const menu = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav');

    menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    });
});

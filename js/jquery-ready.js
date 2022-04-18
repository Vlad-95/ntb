$(document).ready(function() {
    //всплывашка
    $('.js-popup').click(function() {
        $('body').addClass('no-scroll');
        $('.popup').fadeIn();
    })

    $('.popup .close, .popup .btn').click(function() {
        $('body').removeClass('no-scroll');
        $(this).closest('.popup').fadeOut();
    });
});

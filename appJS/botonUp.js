$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('a.scroll-top').fadeIn('fast');
    } else {
        $('a.scroll-top').fadeOut('fast');
    }
});
$('a.scroll-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 100);
});
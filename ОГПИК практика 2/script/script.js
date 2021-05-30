$(document).ready(function() {
    $('.main-menu-burger').click(function(event) {
        $('.main-menu-burger, .main-menu-burger-close, .main-menu-location, .main-menu-navigation, .main-menu-profile-icons').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
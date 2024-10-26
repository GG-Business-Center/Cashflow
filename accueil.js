document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', function() {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        } else {
            navMenu.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var profilebodytheme = document.getElementById('profilebodytheme');
    var themeSelect = document.getElementById('profiletheme');

    if (themeSelect) {
        profilebodytheme.classList.add(themeSelect);
    }
});
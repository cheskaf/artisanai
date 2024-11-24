document.addEventListener('DOMContentLoaded', function() {
    var profileThemeSelect = document.getElementById('profileThemeSelect');
    var profileSaveButton = document.getElementById('profileSaveButton');
  
    profileSaveButton.addEventListener('click', function() {
        var selectedTheme = profileThemeSelect.value;
        // localStorage.setItem('profileSelectedTheme', selectedTheme);
        // alert('Saved successfully');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var profilebodytheme = document.getElementById('profilebodytheme');
    var profileThemeSelect = document.getElementById('profileThemeSelect');
    var selectedTheme = profileThemeSelect.value;
      
    profilebodytheme.className = '';    
    profilebodytheme.classList.add(selectedTheme);
    // var savedTheme = localStorage.getItem('profileSelectedTheme');

    if (savedTheme) {
        profilebodytheme.classList.add(savedTheme);
    }
});
  
function changeColor(event){   
    var profileThemeSelect = document.getElementById('profileThemeSelect');
    var selectedTheme = profileThemeSelect.value;        
    var profilebodytheme = document.getElementById('profilebodytheme');
      
    profilebodytheme.className = '';    
    profilebodytheme.classList.add(selectedTheme);
}

/* select preferencea */
const selectBtn = document.querySelector(".select-btn-preferences"),
items = document.querySelectorAll(".item-preferences");

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked"),
        btnText = document.querySelector(".btn-text");

        if(checked && checked.length > 0){
            btnText.innerText = `${checked.length} Selected`;
        }else{
            btnText.innerText = "Select";
        }
    });
})

document.addEventListener('DOMContentLoaded', function() {
    var itemPreferences = document.querySelectorAll('.item-preferences');

    itemPreferences.forEach(function(item) {
        item.addEventListener('click', function() {
            var checkbox = item.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
        });
    });
});
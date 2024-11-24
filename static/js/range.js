function rangeSlide(value) {
    var rangeValue = document.getElementById('rangeValue');
    var skillLevelInput = document.getElementById('skillLevelInput');
    switch (value) {
        case "1":
            rangeValue.innerHTML = "Beginner";
            skillLevelInput.value = "beginner";
            break;
        case "2":
            rangeValue.innerHTML = "Novice";
            skillLevelInput.value = "novice";
            break;
        case "3":
            rangeValue.innerHTML = "Intermediate";
            skillLevelInput.value = "intermediate";
            break;
        case "4":
            rangeValue.innerHTML = "Expert";
            skillLevelInput.value = "expert";
            break;
        case "5":
            rangeValue.innerHTML = "Master";
            skillLevelInput.value = "master";
            break;
        default:
            rangeValue.innerHTML = "Intermediate";
            skillLevelInput.value = "intermediate";
            break;
    }
}
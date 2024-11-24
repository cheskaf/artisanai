// tags

const tagChBoxes =
    document.querySelectorAll('.tagCheckboxGroup .tagCheckbox');
const tagDpBtn = 
    document.getElementById('tagsSelect');
let tagSelectedTags = [];

function tagHandleCB() {
    tagSelectedTags = [];
    let tagSelectedTagsText = '';

    tagChBoxes.forEach((checkbox) => {
        if (checkbox.checked) {
            tagSelectedTags.push(checkbox.value);
            tagSelectedTagsText += checkbox.value + ', ';
        }
    });
    
    if (tagSelectedTags.length > 1) {
        alert('Please select only one project type.');
        return; // Do not update the innerText if more than 1 tags is selected
    }
    
    tagDpBtn.innerText =
        tagSelectedTags.length > 0
            ? tagSelectedTagsText.slice(0, -2) : 'select one';
}

tagChBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', tagHandleCB);
});


$('.tagCheckbox').on('change', function() {
    if($('.tagCheckbox:checked').length > 1) {
        this.checked = false;
    }
});     
  
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
    
    if (tagSelectedTags.length > 4) {
        return; // Do not update the innerText if more than 4 tags are selected
    }
    
    tagDpBtn.innerText =
        tagSelectedTags.length > 0
            ? tagSelectedTagsText.slice(0, -2) : 'select up to 4';
}

tagChBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', tagHandleCB);
});

// yarn material

const yarnChBoxes =
    document.querySelectorAll('.yarnCheckboxGroup input[type="checkbox"]');
const yarnDpBtn = 
    document.getElementById('yarnSelect');
let yarnSelectedTags = [];

function yarnHandleCB() {
    yarnSelectedTags = [];
    let yarnSelectedTagsText = '';

    yarnChBoxes.forEach((checkbox) => {
        if (checkbox.checked) {
            yarnSelectedTags.push(checkbox.value);
            yarnSelectedTagsText += checkbox.value + ', ';
        }
    });

    yarnDpBtn.innerText =
    yarnSelectedTags.length > 0
            ? yarnSelectedTagsText.slice(0, -2) : 'select';
}

yarnChBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', yarnHandleCB);
});

// other

const otherChBoxes =
    document.querySelectorAll('.otherCheckboxGroup input[type="checkbox"]');
const otherDpBtn = 
    document.getElementById('otherSelect');
let otherSelectedTags = [];

function otherHandleCB() {
    otherSelectedTags = [];
    let otherSelectedTagsText = '';

    otherChBoxes.forEach((checkbox) => {
        if (checkbox.checked) {
            otherSelectedTags.push(checkbox.value);
            otherSelectedTagsText += checkbox.value + ', ';
        }
    });

    otherDpBtn.innerText =
    otherSelectedTags.length > 0
            ? otherSelectedTagsText.slice(0, -2) : 'select';
}

otherChBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', otherHandleCB);
});
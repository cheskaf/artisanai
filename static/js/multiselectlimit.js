// tags

$('.tagCheckbox').on('change', function() {
    if($('.tagCheckbox:checked').length > 4) {
        this.checked = false;
        alert('You can only select up to 4 checkboxes.');
    }
});     
  
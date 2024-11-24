// static/js/follow.js
$(document).ready(function() {
    $('.follow-button').on('click', function() {
        var other_username = $(this).data('user-id');
        var is_following = $(this).data('is-following');

        $.post(`/toggle_follow/${other_username}/`, function(data) {
            if (is_following) {
                $(this).text('Follow');
            } else {
                $(this).text('Unfollow');
            }
            $(this).data('is-following', !is_following);
        });
    });
});

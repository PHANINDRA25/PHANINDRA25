$(document).ready(function(){
    $('.filter-button').click(function(){
        var filter = $(this).attr('data-filter');

        // Hide all projects initially
        $('.d-flex').hide();

        // Show the projects that match the filter
        if(filter === 'all') {
            $('.d-flex').show();
        } else {
            $('.d-flex[data-category="' + filter + '"]').show();
        }

        // Button active state for visual feedback
        $('.filter-heft').removeClass('active');
        $(this).addClass('active');
    });
});

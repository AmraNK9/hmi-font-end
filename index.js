$(document).ready(function()
{
    // $('.first-year').addClass('blue');

    $('.second-year').on('click',function()
    {
       
        $('.first-year').removeClass('blue');
        $('.first-year').addClass('blue_dark');
        $('.second-year').removeClass('blue_dark');
        $('.second-year').addClass('blue');
    })

    $('.first-year').on('click',function()
    {
       
        $('.second-year').removeClass('blue');
        $('.second-year').addClass('blue_dark');
        $('.first-year').removeClass('blue_dark');
        $('.first-year').addClass('blue');
    })

})
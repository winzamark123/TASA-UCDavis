$(document).on('scroll', function () {
    $('h2').css("left", Math.max(300 - 0.75 * window.scrollY) + "px");   
})
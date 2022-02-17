$(document).ready(function() {
    $("button").click(function() {
        var hOne = $("h1");
        var img = $("img");
        hOne.animate({
            fontSize: '5rem'
        }, 5000);
        hOne.css({
            'color': 'red'
        });
        hOne.animate({
            fontSize: '2rem'
        }, 5000, function() {
            hOne.css({
                'color': 'black'
            });
        });
        img.css({
            "border": 'black 2px solid'
        });
    });


});
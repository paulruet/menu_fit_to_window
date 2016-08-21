$(document).ready(function() {

    $(".nav li").on('mouseenter mouseleave', function (e) {
        if ($('ul', this).length) {
            var elm = $('ul:first', this);
            console.log(elm);
            var off = elm.offset();
            console.log(off);

            var l = off.left;
            console.log(l);

            var w = elm.width();
            console.log(w);

            var docH = $(".container").height();
            console.log(docH);

            var docW = $(".container").width();
            console.log(docW);


            var isEntirelyVisible = (l + w <= docW);
            console.log(isEntirelyVisible);


            if (!isEntirelyVisible) {
                $(this).addClass('edge');
            } else {
                $(this).removeClass('edge');
            }
        }
    });
});
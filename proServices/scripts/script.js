// JavaScript source code
window.addEventListener('resize', vAlign);


$(document).ready(function () {
    $("#cust-image").click(function () {
        $("#welcome").hide();
        $("#ibody").css('background-image', 'none');
        $("#footer").hide();
        $("#p1-values").hide();
        $("#painpoints-wrapper").fadeIn(1000);
        vAlign.call();
        $("#footer").slideDown(1000);
        //$('#img1A').slideDown("slow");
    });
});


// Display Product 1 Benefits
$(document).ready(function () {
    $("#pp1img").click(function () {
        $("#painpoints-wrapper").hide();
        $("#footer").hide();
        $("#p1-values").fadeIn(1000);
        $("#footer").fadeIn(1000);
    });
});

// Display Product 2 Benefits
$(document).ready(function () {
    $("#pp2img").click(function () {
        $("#painpoints").hide();
        $("#footer").hide();
        $("#p2f").fadeIn(1000);
        $("#footer").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#img1B").click(function () {
        $("#p1-values").hide();
        $("#painpoints").slideDown("slow");
    });
});


$(document).ready(function () {
    $("#p1-values-next").click(function () {
        $("#p1-values").hide();
        $("#p2f").slideDown("slow");
    });
});

$(document).ready(function () {
    $("#p2aftd1").click(function () {
        $(this).css({ backgroundColor: 'blue' });
        $(p2aftd2).css({ backgroundColor: '#e5eecc' });
    });
});

$(document).ready(function () {
    $("#p2aftd2").click(function () {
        $(this).css({ backgroundColor: 'blue' });
        $(p2aftd1).css({ backgroundColor: '#e5eecc' });
    });
});

$(document).ready(function () {
    $("#img1C").click(function () {
        $("#p2f").hide();
        $("#painpoints").slideDown("slow");
    });
});

$(document).ready(function () {
    $("#p2aftd3").click(function () {
        $("#p2f").hide();
        $("#p3f").slideDown("slow");
    });
});

$(document).ready(function () {
    $("#img1D").click(function () {
        $("#p3f").hide();
        $("#painpoints").slideDown("slow");
    });
});

$(document).ready(function () {
    $("#img1E").click(function () {
        $("#p4f").hide();
        $("#painpoints").slideDown("slow");
    });
});


$(document).ready(function () {
    $("#imgright2").click(function () {
        $("#p3f").hide();
        $("#p4f").slideDown("slow");
    });
});


/*
fuction resize(){
    if ($(window).width() < 900){
        $(".col-md-6").addClass("col-sm-6").removeClass("col-md-6");
    }
};


$(window).resize(function() {
    if ($(window).width() < 995) {
        $(".col-md-6").addClass("col-sm-6").removeClass("col-md-6");
    }
    else if ($(window).width() > 1000) {
        $(".col-sm-6").addClass("col-md-6").removeClass("col-sm-6");
    }
});
*/

//$(".col-md-6").addClass("col-sm-6").removeClass("col-md-6");

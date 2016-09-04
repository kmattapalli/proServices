// JavaScript source code
window.addEventListener('resize', vAlign);

// VERTICALLY ALIGN FUNCTION
function vAlign() {
	var ah = $("#outside").height();
	var ph = window.innerHeight;
	var mh = Math.ceil((ph-ah) / 4);
	$("#outside").css('margin-top', mh);

  //ah = $(".row-2").height();
  //ph = $(".row-2").parent().height();
  mh = Math.ceil((mh) / 2);
  $(".row-2").css('margin-top', mh);

	ah = $("#wrapper").height();
	ph = window.innerHeight;
	mh = Math.ceil((ph-ah) / 5.5);
	$("#wrapper").css('margin-top', mh);
};

$(document).ready(function () {
    $("#cust-image").click(function () {
        $("#panel").hide();
        $("#footer").hide();
        $("#p1f").hide();
        $("#products").slideDown(1000);
        vAlign.call();
        $("#footer").slideDown(1000);
        //$('#img1A').slideDown("slow");
    });
});


// Display Product 1 Benefits
$(document).ready(function () {
    $("#pp1img").click(function () {
        $("#products").hide();
        $("#footer").hide();
        $("#p1f").fadeIn(1000);
        $("#footer").fadeIn(1000);
    });
});

// Display Product 2 Benefits
$(document).ready(function () {
    $("#pp2img").click(function () {
        $("#products").hide();
        $("#footer").hide();
        $("#p2f").fadeIn(1000);
        $("#footer").fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#img1B").click(function () {
        $("#p1f").hide();
        $("#products").slideDown("slow");
    });
});


$(document).ready(function () {
    $("#imgright").click(function () {
        $("#p1f").hide();
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
        $("#products").slideDown("slow");
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
        $("#products").slideDown("slow");
    });
});

$(document).ready(function () {
    $("#img1E").click(function () {
        $("#p4f").hide();
        $("#products").slideDown("slow");
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

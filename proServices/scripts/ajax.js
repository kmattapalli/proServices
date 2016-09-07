// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
// VERTICALLY ALIGN FUNCTION
function vAlign() {
    var ah = $("#outside").height();
    var ph = window.innerHeight;
    var mh = Math.ceil((ph - ah) / 4);
    $("#outside").css('margin-top', mh);

    //ah = $(".row-2").height();
    //ph = $(".row-2").parent().height();
    mh = Math.ceil((mh) / 2);
    $(".row-2").css('margin-top', mh);

    ah = $("#wrapper").height();
    ph = window.innerHeight;
    mh = Math.ceil((ph - ah) / 5.5);
    $("#wrapper").css('margin-top', mh);
};
$(document).ready(function () {
    var vspid = getUrlVars()["SpidId"];
    var spidBasicResults;
    vspid = 1;
    /* PANEL SCREEN BEGIN */
    //console.log("vspid = " + vspid);
   var result = $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: '/SpidInfo.asmx/GetSpidBasic',
        data: '{"SpidId": "' + vspid + '"}',
        processData: true,
        dataType: 'json',
        success: function (response) {
          console.log("GetSpidBasic Success");
          spidBasicResults = eval(response.d);
          console.log(response);
          console.log(spidBasicResults);
          $("#cust-image").attr('src', 'Images/' + spidBasicResults[0].cu_logo);
          document.getElementById("greeting").innerHTML = getGreeting() + " " + spidBasicResults[0].cc_name;
        },
        error: function (a, b, c) {
            console.log("GetSpidBasic Error");
            console.log(a.responseText);
        }
   });
   /* PANEL SCREEN END */

function getGreeting() {
   var now = new Date();
   var hours = now.getHours();
   console.log("Hours = " + hours);
   var msg;
   if (hours < 12) msg = "Good Morning";
   else if (hours < 18) msg = "Good Afternoon";
   else msg = "Good Evening";
   console.log("Greeting = " + msg);
   return msg;
}
/*
getCount (function(spid, type){
  console.log("Get Counts called");
  $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: '/SpidInfo.asmx/GetCounts',
        data: '{"SpidId": "' + spid + '", "type": "' + type + '"}',
        //data: '{"SpidId": "' + spid + '"}',
        processData: true,
        dataType: "json",
        success: function (response) {
          var productValues = eval(response.d);
          var count = productValues[0].recordCount;
          //console.log("record count = " + count);
          return count
        },
        error: function (a, b, c) {
            console.log("GetCount Error");
            console.log(a.responseText);
            return '-1'
        }
  });
});
*/
    /* PAINPOINTS BEGIN */
    var ppCount = 0;
    var vspid = getUrlVars()["SpidId"];
    var spmap = getUrlVars()["SmapId"];
    vspid = 1;
    spmap = 2;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: '/SpidInfo.asmx/GetSpidProductValues',
        data: '{"SpidId": "' + vspid + '", "SmapId": "' + spmap + '"}',
        processData: true,
        dataType: "json",
        success: function (response) {
          console.log("GetSpidProductValues Success");
          var productValues = eval(response.d);
          console.log(productValues[0]);

          ppCount = getCount(1, 'blah');
          console.log("Number of products: " + ppCount);
          //console.log("pp-spmap-id: " + productValues[3].spMapId);

          document.getElementById("pp-title").innerHTML = productValues[0].valueTitle;
          
          var ppImages = new Array(4);
          var ppCaptions = new Array(4);

          var pp1Values = new Array(4);
          var pp2Values = new Array(4);
          var pp3Values = new Array(4);
          var pp4Values = new Array(4);

          for (var i=0; i<ppCount; i++){
            if (productValues[i].spMapId == 1){
              ppImages[0] = productValues[i].painPointImage;
              //console.log("ppImages0: " + ppImages[0]);
              ppCaptions[0] = productValues[i].painPoint;
            }
            else if (productValues[i].spMapId == 2){
              ppImages[1] = productValues[i].painPointImage;
              ppCaptions[1] = productValues[i].painPoint;
            }
            else if (productValues[i].spMapId == 3){
              ppImages[2] = productValues[i].painPointImage;
              ppCaptions[2] = productValues[i].painPoint;
            }
            else if (productValues[i].spMapId == 4){
              ppImages[3] = productValues[i].painPointImage;
              console.log("ppImages3: " + ppImages[3]);
              ppCaptions[3] = productValues[i].painPoint;
            }

          }

          if (ppCount == 3){
            $("#pp4").hide();
          }
          if (ppCount == 2){
            $("#pp3").hide();
            $("#pp4").hide();
          }
          if (ppCount == 1){
            $("#pp2").hide();
            $("#pp3").hide();
            $("#pp4").hide();
          }
          var valueImages = new Array(4);
          var vp = new Array(4);
          /*for (var i=0; i<productCount; i++) {
              valueImages[i] = productValues[i].PainPointImage;
              vp[i] = productValues[i].Value;
          };*/
          $("#pp1img").attr('src', 'images/' + ppImages[0]);
          document.getElementById("pp1cap").innerHTML = ppCaptions[0];

          if (ppCount > 1){
            $("#pp2img").attr('src', 'images/' + ppImages[1]);
            document.getElementById("pp2cap").innerHTML = ppCaptions[1];
          }
          if (ppCount > 2){
            $("#pp3img").attr('src', 'images/' + ppImages[2]);
            document.getElementById("pp3cap").innerHTML = ppCaptions[2];
          }
          if (ppCount > 3){
            $("#pp4img").attr('src', 'images/' + ppImages[3]);
            document.getElementById("pp4cap").innerHTML = ppCaptions[3];
          }
        },
        error: function (a, b, c) {
            console.log("GetSpidProductValues Error");
            console.log(a.responseText);
        }
    });
    /* PAINPOINTS END */

    /* Painpoint 1 Value START 
    var spid = 1;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: '/SpidInfo.asmx/GetProductBenefits',
        data: '{"spid": "' + spid + '"}',
        processData: true,
        dataType: "json",
        success: function (response) {
          var productBenefitResults = eval(response.d);
          console.log(eval(response.d)[0].benefit);

          p1Benefits = Object.keys(productBenefitResults).length;
          //p1Benefits = 1;
          console.log("num of p1Benefits: " + p1Benefits);

          if (p1Benefits == 4){
            document.getElementById("p1b1").innerHTML += "&nbsp" + productBenefitResults[0].benefit;
            document.getElementById("p1b2").innerHTML += "&nbsp" + productBenefitResults[1].benefit;
            document.getElementById("p1b3").innerHTML += "&nbsp" + productBenefitResults[2].benefit;
            document.getElementById("p1b4").innerHTML += "&nbsp" + productBenefitResults[3].benefit;
          }
          else if (p1Benefits == 3){
            document.getElementById("p1b1").innerHTML += "&nbsp" + productBenefitResults[0].benefit;
            document.getElementById("p1b2").innerHTML += "&nbsp" + productBenefitResults[1].benefit;
            document.getElementById("p1b3").innerHTML += "&nbsp" + productBenefitResults[2].benefit;
            $("#p1b4").hide();
          }
          else if (p1Benefits == 2){
            document.getElementById("p1b1").innerHTML += "&nbsp" + productBenefitResults[0].benefit;
            document.getElementById("p1b2").innerHTML += "&nbsp" + productBenefitResults[1].benefit;
            $("#p1b3").hide();
            $("#p1b4").hide();
          }
          else if (p1Benefits == 1){
            document.getElementById("p1b1").innerHTML += "&nbsp" + productBenefitResults[0].benefit;
            $("#p1b2").hide();
            $("#p1b3").hide();
            $("#p1b4").hide();
          }
        },
        error: function (a, b, c) {
            console.log("GetProductBenefits Error");
            console.log(a.responseText);
        }
    });
    /* Painpoint 1 Value END */


    /* PRODUCT 1 BENEFITS START 
    var spmap_id = 2;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: '/SpidInfo.asmx/GetProductBenefits',
        data: '{"spmap_id": "' + spmap_id + '"}',
        processData: true,
        dataType: "json",
        success: function (response) {
          var productBenefitResults = eval(response.d);
          console.log(eval(response.d)[0].benefit);

          p1Benefits = Object.keys(productBenefitResults).length;
          //p1Benefits = 1;
          console.log("num of p1Benefits: " + p1Benefits);

          if (p1Benefits == 4){
            document.getElementById("p2b1").innerHTML += "&nbsp" + productBenefitResults[0].benefit;
            document.getElementById("p2b2").innerHTML += "&nbsp" + productBenefitResults[1].benefit;
            document.getElementById("p2b3").innerHTML += "&nbsp" + productBenefitResults[2].benefit;
            document.getElementById("p2b4").innerHTML += "&nbsp" + productBenefitResults[3].benefit;
          }
          else if (p1Benefits == 3){
            document.getElementById("p2b1").innerHTML += "&nbsp" + productBenefitResults[0].benefit;
            document.getElementById("p2b2").innerHTML += "&nbsp" + productBenefitResults[1].benefit;
            document.getElementById("p2b3").innerHTML += "&nbsp" + productBenefitResults[2].benefit;
            $("#p2b4").hide();
          }
          else if (p1Benefits == 2){
            document.getElementById("p2b1").innerHTML += "&nbsp" + productBenefitResults[0].benefit;
            document.getElementById("p2b2").innerHTML += "&nbsp" + productBenefitResults[1].benefit;
            $("#p2b3").hide();
            $("#p2b4").hide();
          }
          else if (p1Benefits == 1){
            document.getElementById("p2b1").innerHTML += "&nbsp" + productBenefitResults[0].benefit;
            $("#p2b2").hide();
            $("#p2b3").hide();
            $("#p2b4").hide();
          }
        },
        error: function (a, b, c) {
            console.log("GetProductBenefits Error");
            console.log(a.responseText);
        }
    });
    /* PRODUCT 1 BENEFITS END */


/*
    var custLogoImg = document.getElementById('CustLogoContainer').firstChild;
    custLogoImg.onload = loadCustLogo();

    var custP1Img = document.getElementById('CustP1Container').firstChild;
    custP1Img.onload = loadCustPImg();

    var custP2Img = document.getElementById('CustP2Container').firstChild;
    custP2Img.onload = loadCustPImg();

    var custP3Img = document.getElementById('CustP3Container').firstChild;
    custP3Img.onload = loadCustPImg();

    var custP4Img = document.getElementById('CustP4Container').firstChild;
    custP4Img.onload = loadCustPImg();

    var screen2CustLogoImg = document.getElementById('Screen2CustLogoContainer').firstChild;
    screen2CustLogoImg.onload = loadCustLogo();
*/


});

function loadCustLogo() {
    if (custLogoImg.height > custLogoImg.width) {
        custLogoImg.height = '100%';
        custLogoImg.width = 'auto';
    }
};

function loadCustPImg() {
    if (custP1Img.height > custP1Img.width) {
        custP1Img.height = '100%';
        custP1Img.width = 'auto';
    }
    if (custP2Img.height > custP2Img.width) {
        custP2Img.height = '100%';
        custP2Img.width = 'auto';
    }
    if (custP3Img.height > custP3Img.width) {
        custP3Img.height = '100%';
        custP3Img.width = 'auto';
    }
    if (custP4Img.height > custP4Img.width) {
        custP4Img.height = '100%';
        custP4Img.width = 'auto';
    }
};

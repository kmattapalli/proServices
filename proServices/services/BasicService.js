var app = angular.module('Sellocity', ['ngRoute', 'ngAnimate']);



function GetSpidBasic() {
    var vspid = 1;
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
            document.getElementById("welcome-greeting").innerHTML = getGreeting() + " " + spidBasicResults[0].cc_name;
        },
        error: function (a, b, c) {
            console.log("GetSpidBasic Error");
            console.log(a.responseText);
        }
    });
}
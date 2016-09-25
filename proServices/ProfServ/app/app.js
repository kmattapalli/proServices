var app = angular.module('Sellocity', ['ngRoute', 'ngAnimate', 'ng.deviceDetector', 'ngDialog']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      
        .when('/', {
            templateUrl: '/ProfServ/pages/welcome.html',
            controller: 'welcomeCtrl'
        })
        .when('/disabled', {
            templateUrl: '/ProfServ/pages/disabled.html',
            controller: 'disabledCtrl'
        })
        .when('/painpoints', {
            templateUrl: '/ProfServ/pages/painpoints.html',
            controller: 'painpointsCtrl'
        })
        .when('/p0-values', {
            templateUrl: '/ProfServ/pages/dummyPain.html',
            controller: 'p0Ctrl'
        })
        .when('/p1-values', {
            templateUrl: '/ProfServ/pages/Values.html',
          controller: 'p1Ctrl'
      })
        .when('/p1-specs', {
            templateUrl: '/ProfServ/pages/Specs.html',
          controller: 'p1Ctrl'
      })
        .when('/p1-benefits', {
            templateUrl: '/ProfServ/pages/Benefits.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-claims', {
            templateUrl: '/ProfServ/pages/Claims.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-awards', {
            templateUrl: '/ProfServ/pages/Awards.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-testimonials', {
            templateUrl: '/ProfServ/pages/Testimonials.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-faqs', {
            templateUrl: '/ProfServ/pages/Faqs.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-affirm', {
            templateUrl: '/ProfServ/pages/Affirm.html',
            controller: 'p1Ctrl'
        })

        .when('/p2-values', {
            templateUrl: '/ProfServ/pages/Values.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-specs', {
            templateUrl: '/ProfServ/pages/Specs.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-benefits', {
            templateUrl: '/ProfServ/pages/Benefits.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-claims', {
            templateUrl: '/ProfServ/pages/Claims.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-awards', {
            templateUrl: '/ProfServ/pages/Awards.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-testimonials', {
            templateUrl: '/ProfServ/pages/Testimonials.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-faqs', {
            templateUrl: '/ProfServ/pages/Faqs.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-affirm', {
            templateUrl: '/ProfServ/pages/Affirm.html',
            controller: 'p2Ctrl'
        })

        .when('/p3-values', {
            templateUrl: '/ProfServ/pages/Values.html',
            controller: 'p3Ctrl'
        })
        .when('/p3-specs', {
            templateUrl: '/ProfServ/pages/Specs.html',
            controller: 'p3Ctrl'
        })
        .when('/p3-benefits', {
            templateUrl: '/ProfServ/pages/Benefits.html',
            controller: 'p3Ctrl'
        })
        .when('/p3-claims', {
            templateUrl: '/ProfServ/pages/Claims.html',
            controller: 'p3Ctrl'
        })
        .when('/p3-awards', {
            templateUrl: '/ProfServ/pages/Awards.html',
            controller: 'p3Ctrl'
        })
        .when('/p3-testimonials', {
            templateUrl: '/ProfServ/pages/Testimonials.html',
            controller: 'p3Ctrl'
        })
        .when('/p3-faqs', {
            templateUrl: '/ProfServ/pages/Faqs.html',
            controller: 'p3Ctrl'
        })
        .when('/p3-affirm', {
            templateUrl: '/ProfServ/pages/Affirm.html',
            controller: 'p3Ctrl'
        })

        .when('/p4-values', {
            templateUrl: '/ProfServ/pages/Values.html',
            controller: 'p4Ctrl'
        })
        .when('/p4-specs', {
            templateUrl: '/ProfServ/pages/Specs.html',
            controller: 'p4Ctrl'
        })
        .when('/p4-benefits', {
            templateUrl: '/ProfServ/pages/Benefits.html',
            controller: 'p4Ctrl'
        })
        .when('/p4-claims', {
            templateUrl: '/ProfServ/pages/Claims.html',
            controller: 'p4Ctrl'
        })
        .when('/p4-awards', {
            templateUrl: '/ProfServ/pages/Awards.html',
            controller: 'p4Ctrl'
        })
        .when('/p4-testimonials', {
            templateUrl: '/ProfServ/pages/Testimonials.html',
            controller: 'p4Ctrl'
        })
        .when('/p4-faqs', {
            templateUrl: '/ProfServ/pages/Faqs.html',
            controller: 'p4Ctrl'
        })
        .when('/p4-affirm', {
            templateUrl: '/ProfServ/pages/Affirm.html',
            controller: 'p4Ctrl'
        })

  .otherwise({
      redirectTo: '/'
  });
}]);
app.run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if (!current) {
            $location.path('/');
        }
    });
});
app.service('ServiceCall', function ($http, deviceDetector, $filter) {

    var data = {
        sendData: 'true',
        spid: '',
        SalesPerson: { firstName:'', lastName:'', phone:'', email:'', image:'' },
        Play: { status:'', spid:'', playName:'', clientContact: '', clientName: '', clientEmail:'', clientTitle: '' },
        AllPains: [],
        SessionInfo: { sessionId: 'n/a', spid: '', device: '', browser: '', ip: '', location: '' },
        currentPage: '',
        Pain0: { index: '0', spmapId: '0', painPoint: 'Is there anything else we can help you with?', painPointImage: '/ProfServ/Images/PP4.jpg' }
    };
    console.log("Send data = " + data.sendData);
    data.SessionInfo.browser = deviceDetector.browser;
    //data.SessionInfo.os = deviceDetector.os;
    data.SessionInfo.device = deviceDetector.device;
    if (data.SessionInfo.device == "unknown") data.SessionInfo.device = "pc";

    // Set IP Address
    //setIp();
    this.setIP_Location = function (ip, location) {
        //console.log("IP, Location: " + ip + ", " + location)
        data.SessionInfo.ip = ip;
        data.SessionInfo.location = location;
    }
    this.updateCurrentPage = function (path) {
        if (path == "/") data.currentPage = 'welcome'
        else data.currentPage = path.substring(1);
        //console.log("Path: " + data.currentPage);
    }
    //var result = angular.merge(data.SessionInfo, x);
    //console.log("Session Info 2:" + JSON.stringify(data.SessionInfo, null, 4));
    this.getSessionInfo = function () {
        return data.SessionInfo;
    }
    
    this.sendEmail = function(spmapid, productName, responseType, comments){
        var url = "http://scityws.azurewebsites.net/Email/Send/";
        var params = "?spid=" + data.Play.spid + "&spmapid=" + spmapid + "&splayname=" + data.Play.playName + "&productname=" + productName + "&spfname=" + data.SalesPerson.firstName + "&splname=" + data.SalesPerson.lastName + "&spemail=" + data.SalesPerson.email + "&ccname=" + data.Play.clientName + "&ccemail=" + data.Play.clientEmail + "&emailType=" + responseType + "&comments=" + comments;
        //console.log("Email Params: " + params);
        url = url + encodeURI(params);
        //console.log("Email URL: " + url);
        if (data.sendData == 'true') {
            $http.get(url).then(function (result) {
                //console.log(result);
                if (result.data != "Email Sent") console.log("For Params: "+params+" - Send Email failed");
                else console.log("For Params: " + params + " - Send Email success");
            });
        }
        if (responseType == "MoreInfo" || responseType == "No" || responseType == "Yes") {
            var params2 = "?spid=" + data.Play.spid + "&spmapid=" + spmapid + "&responsetype=" + responseType + "&comments=" + comments;
            //console.log("Response table Params: " + params);
            url = "http://scityws.azurewebsites.net/Service/PutSpidResponse/" + encodeURI(params2);
            if (data.sendData == 'true') {
                $http.get(url).then(function (result) {
                    //console.log(result);
                    if (result.data != "Success") console.log("For Params2: "+params+" - Put response in table failed");
                    else console.log("For Params2: " + params2 + " - Put response in table success");
                });
            }
        }
    }
    this.sendAnalytics = function (spmapId, eventName, nextPage) {
        var params = "?spid=" + data.SessionInfo.spid + "&spmapId=" + spmapId + "&sessionID=" + data.SessionInfo.sessionId + "&currentPage=" + data.currentPage + "&eventName=" + eventName + "&nextPage=" + nextPage + "&time=" + getTime() + "&device=" + data.SessionInfo.device + "&browser=" + data.SessionInfo.browser + "&ip=" + data.SessionInfo.ip + "&location=" + data.SessionInfo.location;
        params = encodeURI(params);
        var url = "http://scityws.azurewebsites.net/Service/PutAnalytics/" + params;
        console.log("Put analytics URL: " + params);
        if (data.sendData == 'true') {
            $http.get(url).then(function (result) {
                //console.log(result);
                if (result.data != "Success") console.log("Send analytics failed");
                else console.log("Send analytics success");
            });
        }
    }
    this.changeSpidStatus = function (spid, status) {
        data.Play.status = status;      //change local spid status
        var params = "?spid=" + spid + "&status=" + status;
        //console.log("Change spid status params: " + params);
        var url = "http://scityws.azurewebsites.net/Service/SetSpidStatus/" + encodeURI(params);
        if (data.sendData == 'true') {
            $http.get(url).then(function (result) {
                //console.log(result);
                if (result.data != "Success") console.log("Change spid status failed");
                else console.log("Change spid status success");
            });
        }
    }
    // Get Time
    //console.log(getTime());
    function getTime() {
        return $filter('date')(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }

    this.setSalesPerson = function (spid) {
        var email = "atisaket@gmail.com";
        // Get product values
        var url = "http://scityws.azurewebsites.net/service/GetSalesPersonInfo/" + spid;
        return $http.get(url).then(function (result) {
            data.SalesPerson.firstName = result.data[0].FIRSTNAME;
            data.SalesPerson.lastName = result.data[0].LASTNAME;
            data.SalesPerson.phone = result.data[0].PHONE;
            //data.SalesPerson.email = result.data[0].EMAIL;
            data.SalesPerson.email = email;
            data.SalesPerson.image = "Images/"+result.data[0].IMAGE_URL;
            //console.log("Salesperson name: " + data.SalesPerson.firstName);       
        });
    }
        
    this.setSpid = function (spid) {
        //console.log("Spid = " + spid);
        data.spid = spid;
        data.Play.spid = spid;
        data.SessionInfo.spid = spid;
    }

    this.setBasic = function (spid) {
        //console.log("Get Data");
        var url = "http://scityws.azurewebsites.net/service/GetSpidInfo/" + spid;
        return $http.get(url).then(function (result) {
            data.Play.status = result.data[0].CSTATUS;
            //data.Play.status = "L";
            //console.log("Result" + result.data[0]);
            data.Play.clientContact = result.data[0].CLIENT_CONTACT_NAME;
            //console.log("Clinet Name: " + data.Play.clientContact);
            data.Play.clientName = result.data[0].CLIENT_NAME;
            //data.Play.clientTitle = result.data[0].NAME;      //using name or title?
            data.Play.clientTitle = result.data[0].TITLE;
            data.Play.clientEmail = result.data[0].CLIENT_CONTACT_EMAIL;
            data.Play.playName = result.data[0].NAME;
        });
    }

    this.setSpidMappings = function (spid) {
        //console.log("Get Mappings");
        var url = "http://scityws.azurewebsites.net/service/GetSpidMappings/" + spid;
        return $http.get(url).then(function (result) {            
            angular.forEach(result.data, function (value, key) {
                var Pain = { index: '', title:'', spmapId: '', painPoint: '', painPointImage: '', product: '', productImage: '', productInStock: '', valuesTitle:'', values: [], benefits: [], specsUrl: '', manualUrl:'', claims:[], awards:[], testimonials:[], faqs:[] };
                Pain.index = key + 1;
                Pain.title = value.TITLE;
                Pain.spmapId = value.SPMAP_ID;
                Pain.painPoint = value.PAIN_POINT;
                Pain.painPointImage = "/ProfServ/Images/" + value.PAIN_POINT_IMAGE;
                Pain.product = value.PRODUCT_NAME;
                Pain.productImage = "/ProfServ/Images/" + value.PRODUCT_IMAGE;
                Pain.productInStock = value.PRODUCT_IN_STOCK;
               
                // Get product values
                var url = "http://scityws.azurewebsites.net/service/GetProductValues/" + Pain.spmapId;
                $http.get(url).then(function (result) {
                    var val = [];
                    angular.forEach(result.data, function (value, key) {
                        Pain.valuesTitle = value.TITLE;
                        val.push(value.VALUE);
                    });
                    //console.log("Val for spmapID " + value.spmapId + " are: " + val);
                    Pain.values = val;
                });
                
                // Get product Specs
                var url = "http://scityws.azurewebsites.net/service/GetProductSpecs/" + Pain.spmapId;
                $http.get(url).then(function (result) {
                    Pain.specsUrl = result.data[0].URL;
                    //console.log("URL: " + Pain.specsUrl);
                });

                // Get product Manuals
                var url = "http://scityws.azurewebsites.net/service/GetProductManuals/" + Pain.spmapId;
                $http.get(url).then(function (result) {
                    Pain.manualUrl = result.data[0].URL;
                    //console.log("URL: " + Pain.specsUrl);
                });

                // Get product benefits
                var url = "http://scityws.azurewebsites.net/service/GetProductBenefits/" + Pain.spmapId;
                $http.get(url).then(function (result) {
                    var ben = [];
                    angular.forEach(result.data, function (value, key) {
                        ben.push(value.BENEFIT);
                    });
                    //console.log("Val for spmapID " + value.spmapId + " are: " + val);
                    Pain.benefits = ben;
                });

                // Get product claims
                var url = "http://scityws.azurewebsites.net/service/GetProductClaims/" + Pain.spmapId;
                $http.get(url).then(function (result) {
                    var cla = [];
                    angular.forEach(result.data, function (value, key) {
                        cla.push("/ProfServ/Images/" + value.IMAGE_URL);
                    });
                    //console.log("Val for spmapID " + value.spmapId + " are: " + val);
                    Pain.claims = cla;
                });

                // Get product Awards
                var url = "http://scityws.azurewebsites.net/service/GetProductAwards/" + Pain.spmapId;
                $http.get(url).then(function (result) {
                    var awa = [];
                    angular.forEach(result.data, function (value, key) {
                        awa.push("/ProfServ/Images/" + value.IMAGE_URL);
                    });
                    //console.log("Val for spmapID " + value.spmapId + " are: " + val);
                    Pain.awards = awa;
                });

                // Get product Testimonials
                var url = "http://scityws.azurewebsites.net/service/GetProductTestimonials/" + Pain.spmapId;
                $http.get(url).then(function (result) {
                    var tes = [];
                    angular.forEach(result.data, function (value, key) {
                        tes.push(value.NAME);
                    });
                    //console.log("Val for spmapID " + value.spmapId + " are: " + val);
                    Pain.testimonials = tes;
                });

                // Get product FAQs
                var url = "http://scityws.azurewebsites.net/service/GetProductCommonQA/" + Pain.spmapId;
                $http.get(url).then(function (result) {
                    var qa = {q:'', a:''};
                    angular.forEach(result.data, function (value, key) {
                        qa.q = value.QUESTION;
                        qa.a = value.ANSWER;
                        Pain.faqs.push(qa);
                    });
                    //console.log("Val for spmapID " + value.spmapId + " are: " + val);
                    
                });

                //console.log("Pain: " + JSON.stringify(Pain, null, 4));
                data.AllPains.push(Pain);
                
            });
            
            if (data.AllPains.length < 4){
                data.AllPains.push(data.Pain0);
                //console.log("Pushing Pain 0");
            }
            
        });
        
    }

    this.getSalesPerson = function (spid) {
        return data.SalesPerson;
    }
    this.getPlay = function () {
        return data.Play;
    }
    this.getPain1 = function () {
        if (data.AllPains[0] != '') return data.AllPains[0];
        else return null;
    }
    this.getPain2 = function () {
        if (data.AllPains[1] != '') return data.AllPains[1];
        else return null;
    }
    this.getPain3 = function () {
        if (data.AllPains[2] != '') return data.AllPains[2];
        else return null;
    }
    this.getPain4 = function () {
        if (data.AllPains[3] != '') return data.AllPains[3];
        else return null;
    }
});
app.controller('disabledCtrl', function ($scope) {
    $scope.text = "This salesplay has been disabled. Please contact the sender for more details.";
});
app.controller('welcomeCtrl', function (ServiceCall, $scope, $http, $location) {
    
    function getGreeting() {
        var now = new Date();
        var hours = now.getHours();
        //console.log("Hours = " + hours);
        var msg;
        if (hours < 12) msg = "Good Morning";
        else if (hours < 18) msg = "Good Afternoon";
        else msg = "Good Evening";
        //console.log("Greeting = " + msg);
        return msg;
    }
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
    }
    var spid = getQueryVariable("spid");    //Get spid from URL
    //var email = getQueryVariable("email");
    //console.log("Email: " + email);
    
    ServiceCall.setSpid(spid);              //Set spid in ServiceCall.data.SessionInfo
    $scope.sendAnalytics = function (spmapId, eventName, nextPage) {
        ServiceCall.sendAnalytics(spmapId, eventName, nextPage);
    }
    ServiceCall.setBasic(spid).then(function (result) {
        var Play = ServiceCall.getPlay();
        console.log("Spid status = " + Play.status)
        if (Play.status == "D" || Play.status == "I" || Play.status == "A") {
            $location.path('/disabled');
        }
        else {
            $("#ibody").addClass("bgImg");
            $("#page-footer").removeClass("footer-disable");
            $scope.rightArrow = "keyboard_arrow_right"
            //console.log("inside setBasic")
            $scope.greeting = getGreeting() + ", ";
            $scope.secondLine = "Let me help you with your purchases.";
            $scope.custName = ServiceCall.getPlay().clientContact;
            ServiceCall.setSpidMappings(spid).then(function (result) {
                //console.log("inside setSpidMappings")
                ServiceCall.setSalesPerson(1).then(function (res) {
                    //console.log("inside setSalesPerson")
                    if (Play.status == "L") {           //Change spid status to Viewed
                        ServiceCall.changeSpidStatus(spid, "V");
                        console.log("New spid status = " + Play.status);
                        ServiceCall.sendEmail("0", "n/a", "Welcome", "");
                    }
                });          //Get sales person info
            });      // Get spid mapping and all product info
        }

    });
    
    ServiceCall.updateCurrentPage($location.path());

    $.getJSON('http://ipinfo.io', function (data) {
        //console.log(data)
        ServiceCall.setIP_Location(data.ip, data.city + ', ' + data.region + ', ' + data.country);
        ServiceCall.sendAnalytics('0000', 'urlLoad', 'none');
    })

/*
    var url = "https://freegeoip.net/json/";
    $http.get(url).then(function (result) {
        ServiceCall.setIP_Location(result.ip, data.city + ', ' + data.region_name + ', ' + data.country_name);
    });
*/
    //console.log("Hi");       //but this is printing data: undefined
    

    
});

app.controller('painpointsCtrl', function ($scope, ServiceCall, $location) {
    //console.log("ClientName = " + ServiceCall.getPlay().clientContact)
    $("#ibody").removeClass("bgImg");

    $scope.ppTitle = ServiceCall.getPlay().title;
    $scope.Pain1 = ServiceCall.getPain1();
    $scope.Pain2 = ServiceCall.getPain2();
    $scope.Pain3 = ServiceCall.getPain3();
    $scope.Pain4 = ServiceCall.getPain4();
    $scope.Person = ServiceCall.getSalesPerson();

    $scope.sendAnalytics = function (spmapId, eventName, nextPage) {
        ServiceCall.sendAnalytics(spmapId, eventName, nextPage);
    }

    //console.log("PP1 Label: " + $scope.Pain1.painPoint);
    //console.log("Values for spmap " + $scope.Pain1.spmapId + " are: " + $scope.Pain1.values);
    ServiceCall.updateCurrentPage($location.path());
    // VERTICALLY ALIGN FUNCTION
    $scope.vAlign = function () {
        //console.log("vAlign called in controller");
        var ah = $("#pp-rows").height();
        var ph = window.innerHeight;
        var mh = Math.ceil((ph - ah) / 10);
        $("#pp-rows").css('margin-top', mh);
        mh = Math.ceil((mh) / 10);
        $("#pp-row-2").css('margin-top', mh);
    };
    $scope.vAlign();

});

app.controller('p0Ctrl', function ($scope, ServiceCall, $location, $document) {
    $(document).ready(function () {
        $('.tooltipped').tooltip({ delay: 50 });
    });
    $scope.Play = ServiceCall.getPlay();
    $scope.Person = ServiceCall.getSalesPerson();

    $scope.openDummyModal = function () {
        $('#dummyModal').openModal({
            dismissible: false
        });        
    }
    $scope.comment = "";
    var isDisabled = false;
    $scope.infoSubmitClicked = function () {
        if (isDisabled == false) {
            isDisabled = true;
            Materialize.toast('Your comments have been received.', 4000, 'rounded')
            angular.element(document.querySelector('#dummyComment')).attr('disabled', "true");;
            $("#submit").addClass('disabled');
            $scope.sendAnalytics('0', 'p0-comments', 'painpoints')
            //console.log($scope.comment);
            ServiceCall.sendEmail("0", "n/a", "OtherInfo", $scope.comment);
        }

        
    }
    $(document).ready(function () {
        $('.phone-tooltip').tooltip({
            delay: 50,
            html: true,
            position: "bottom",
            tooltip: "Phone number: "+$scope.Person.phone
        });
    });
    
    $(document).ready(function () {
        $('.email-tooltip').tooltip({
            delay: 50,
            html: true,
            position: "bottom",
            tooltip: "Click to email: "+$scope.Person.email
        });
    });
    

    ServiceCall.updateCurrentPage($location.path());
    $scope.sendAnalytics = function (spmapId, eventName, nextPage) {
        ServiceCall.sendAnalytics(spmapId, eventName, nextPage);
    }
});

app.controller('p1Ctrl', function ($scope, ServiceCall, $location) {
    $scope.Play = ServiceCall.getPlay();
    $scope.Pain = ServiceCall.getPain1();
    $scope.Person = ServiceCall.getSalesPerson();
    //console.log("P1 Values called");
    //var session_id = $cookie.JSESSIONID.value;
    //console.log("Session ID: " + session_id);
    // Utility function for this scope.
    // VERTICALLY ALIGN FUNCTION
    function vAlign(id, div) {
        //console.log("vAlign in P1 with id: " + id + ", divider: " + div);
        var ah = $(id).height();
        var ph = window.innerHeight;
        var mh = Math.ceil((ph - ah) / div);
        $(id).css('margin-top', mh);
    };
    $scope.vAlign = vAlign;
    $scope.openModal = function () {
        $('iframe').attr("src", "http://www.pdf995.com/samples/pdf.pdf");
        $('#specsModal').openModal();
    }
    $scope.openYesModal = function () {
        $('#yesModal').openModal();
        ServiceCall.sendEmail($scope.Pain.spmapId, $scope.Pain.product, "Yes", "n/a");
    }
    $scope.openMoreModal = function () {
        $('#moreModal').openModal();
    }
    $scope.openNoModal = function () {
        $('#noModal').openModal();        
    }
    ServiceCall.updateCurrentPage($location.path());
    $scope.sendAnalytics = function (spmapId, eventName, nextPage) {
        ServiceCall.sendAnalytics(spmapId, eventName, nextPage);
    }
    // Page Titles
    //$scope.claimsTitle = "Claims";
    //$scope.awardsTitle = "Awards";
    //$scope.testimonialsTitle = "Testimonials";
    $scope.faqsTitle = "Quick answers to some commonly asked questions";

    if ($scope.Pain.productInStock == 'Y') $scope.inStock = "In Stock";
    else $scope.inStock = "";

    // Dynamic Page Links
    $scope.valuesPrevious = "painpoints";
    $scope.valuesNext = "p" + $scope.Pain.index + "-specs";
    $scope.specsPrevious = "p" + $scope.Pain.index + "-values";
    $scope.specsNext = "p" + $scope.Pain.index + "-benefits";
    $scope.benefitsPrevious = "p" + $scope.Pain.index + "-specs";
    //$scope.benefitsNext = "p2-competitive";   //Uncomment when competitive screen is ready
    //$scope.competitiveNext = "p2-claims";

    // Optionals stuff      --------------------|
    // After benefits what screen to go to?
    if ($scope.Pain.claims != '') {
        $scope.benefitsNext = "p" + $scope.Pain.index + "-claims";      //if claims exist, go to claims
        $scope.claimsPrevious = "p" + $scope.Pain.index + "-benefits";  //if benefitsNext is claims, then claimsPrevious is benefits
    }
    else if ($scope.Pain.awards != '') {
        $scope.benefitsNext = "p" + $scope.Pain.index + "-awards";               //else if awards exist, go to awards
        $scope.awardsPrevious = "p" + $scope.Pain.index + "-benefits";
    }
    else if ($scope.Pain.testimonials != '') {
        $scope.benefitsNext = "p" + $scope.Pain.index + "-testimonials";   //else if testimonials exist, go to testimonials
        $scope.testimonialsPrevious = "p" + $scope.Pain.index + "-benefits";
    }
    else if ($scope.Pain.faqs != '') {
        $scope.benefitsNext = "p" + $scope.Pain.index + "-faqs";                   //else if faqs exist, go to faqs
        $scope.faqsPrevious = "p" + $scope.Pain.index + "-benefits";
    }
    else {
        $scope.benefitsNext = "p" + $scope.Pain.index + "-affirm";               //else, go to affirm
        $scope.affirmPrevious = "p" + $scope.Pain.index + "-benefits";
    }

    // After claims, what screen to go to?
    if ($scope.Pain.awards != '') {
        $scope.claimsNext = "p" + $scope.Pain.index + "-awards";                      //if awards exist, go to awards
        $scope.awardsPrevious = "p" + $scope.Pain.index + "-claims";
    }
    else if ($scope.Pain.testimonials != '') {
        $scope.claimsNext = "p" + $scope.Pain.index + "-testimonials";     //else if testimonials exist, go to testimonials
        $scope.testimonialsPrevious = "p" + $scope.Pain.index + "-claims";
    }
    else if ($scope.Pain.faqs != '') {
        $scope.claimsNext = "p" + $scope.Pain.index + "-faqs";                     //else if faqs exist, go to faqs
        $scope.faqsPrevious = "p" + $scope.Pain.index + "-claims";
    }
    else {
        $scope.claimsNext = "p" + $scope.Pain.index + "-affirm";                                               //else, go to affirm
        $scope.affirmPrevious = "p" + $scope.Pain.index + "-claims";
    }

    // After awards, what screen to go to?
    if ($scope.Pain.testimonials != '') {
        $scope.awardsNext = "p" + $scope.Pain.index + "-testimonials";          //if testimonials exist, go to testimonials
        $scope.testimonialsPrevious = "p" + $scope.Pain.index + "-awards";
    }
    else if ($scope.Pain.faqs != '') {
        $scope.awardsNext = "p" + $scope.Pain.index + "-faqs";                     //else if faqs exist, go to faqs
        $scope.faqsPrevious = "p" + $scope.Pain.index + "-awards";
    }
    else {
        $scope.awardsNext = "p1-affirm";                                               //else, go to affirm
        $scope.affirmPrevious = "p" + $scope.Pain.index + "-awards";
    }

    // After testimonials, what screen to go to?
    if ($scope.Pain.faqs != '') {
        $scope.testimonialsNext = "p" + $scope.Pain.index + "-faqs";                    //if faqs exist, go to faqs
        $scope.faqsPrevious = "p" + $scope.Pain.index + "-testimonials";
    }
    else {
        $scope.testimonialsNext = "p" + $scope.Pain.index + "-affirm";                                         //else, go to affirm
        $scope.affirmPrevious = "p" + $scope.Pain.index + "-testimonials";
    }
    // Optional Stuff       --------------------|
    // After FAQs
    if ($scope.Pain.faqs != '') {
        $scope.faqsNext = "p" + $scope.Pain.index + "-affirm";
        $scope.affirmPrevious = "p" + $scope.Pain.index + "-faqs";
    }
    /*May need this for future        
    //$("#pp1-img").css("width", (($("#pp1-img-parent").width()) + "px"));
    //$("#p1-img").css("width", (($("#p1-img-parent").width()) + "px"));
    //$("#v-hr").css("margin-top", (($("#v-hr-parent").height() / 2) + "px"));
    $scope.numRowsTest = $scope.testimonials.length;
    $scope.getRowsTest = function (numRowsTest) {
        return new Array(numRowsTest);
    };*/


    $scope.noComment = "";
    $scope.moreComment = "";

    var isMoreDisabled = false;    
    $scope.moreSubmitClicked = function () {
        if (isMoreDisabled == false) {
            isMoreDisabled = true;
            Materialize.toast('Your comments have been received.', 4000, 'rounded')
            angular.element(document.querySelector('#moreComment')).attr('disabled', "true");;
            $("#moreSubmit").addClass('disabled');
            $scope.sendAnalytics($scope.Pain.spmapId, 'p1-moreComment', 'p1-affirm')
            //console.log("More: "+$scope.moreComment);
            ServiceCall.sendEmail($scope.Pain.spmapId, $scope.Pain.product, "MoreInfo", $scope.moreComment);
        }

        
    }
    var isNoDisabled = false;
    $scope.noSubmitClicked = function () {
        if (isNoDisabled == false) {
            isNoDisabled = true;
            Materialize.toast('Your comments have been received.', 4000, 'rounded')
            angular.element(document.querySelector('#noComment')).attr('disabled', "true");;
            $("#noSubmit").addClass('disabled');
            $scope.sendAnalytics($scope.Pain.spmapId, 'p1-noComment', 'p1-affirm')
            //console.log("No: "+$scope.noComment);
            ServiceCall.sendEmail($scope.Pain.spmapId, $scope.Pain.product, "No", $scope.noComment);
        }

        
    }

    $(document).ready(function () {
        $('.phone-tooltip').tooltip({
            delay: 50,
            html: true,
            position: "bottom",
            tooltip: "Phone number: " + $scope.Person.phone
        });
    });

    $(document).ready(function () {
        $('.email-tooltip').tooltip({
            delay: 50,
            html: true,
            position: "bottom",
            tooltip: "Click to email: " + $scope.Person.email
        });
    });
    
});

app.controller('p2Ctrl', function ($scope, ServiceCall, $location) {
    $scope.Play = ServiceCall.getPlay();
    $scope.Pain = ServiceCall.getPain2();
    $scope.Person = ServiceCall.getSalesPerson();
    //console.log("P2 Values called");
    ServiceCall.updateCurrentPage($location.path());
    $scope.sendAnalytics = function (spmapId, eventName, nextPage) {
        ServiceCall.sendAnalytics(spmapId, eventName, nextPage);
    }
    // Utility function for this scope.
    // VERTICALLY ALIGN FUNCTION
    function vAlign(id, div) {
        //console.log("vAlign in P1 with id: " + id + ", divider: " + div);
        var ah = $(id).height();
        var ph = window.innerHeight;
        var mh = Math.ceil((ph - ah) / div);
        $(id).css('margin-top', mh);
    };
    $scope.vAlign = vAlign;

    $scope.openYesModal = function () {
        $('#yesModal').openModal();
        ServiceCall.sendEmail($scope.Pain.spmapId, $scope.Pain.product, "Yes", "n/a");
    }
    $scope.openMoreModal = function () {
        $('#moreModal').openModal();
    }
    $scope.openNoModal = function () {
        $('#noModal').openModal();
    }

    // Page Titles
    //$scope.claimsTitle = "Claims2";
    //$scope.awardsTitle = "Awards2";
    //$scope.testimonialsTitle = "Testimonials2";
    $scope.faqsTitle = "Quick answers to some commonly asked questions2";

    if ($scope.Pain.productInStock == 'Y') $scope.inStock = "In Stock";
    else $scope.inStock = "";

    //Dynamic Links
    $scope.valuesNext = "p2-specs";
    $scope.specsNext = "p2-benefits";
    //$scope.benefitsNext = "p2-competitive";   //Uncomment when competitive screen is ready
    //$scope.competitiveNext = "p2-claims";
    // Optionals stuff      --------------------|
    if ($scope.Pain.claims != '') $scope.benefitsNext = "p2-claims";                    //if claims exist, go to claims
    else if ($scope.Pain.awards != '') $scope.benefitsNext = "p2-awards";               //else if awards exist, go to awards
    else if ($scope.Pain.testimonials != '') $scope.benefitsNext = "p2-testimonials";   //else if testimonials exist, go to testimonials
    else if ($scope.Pain.faqs != '') $scope.benefitsNext = "p2-faqs";                   //else if faqs exist, go to faqs
    else $scope.benefitsNext = "p2-affirm";                                             //else, go to affirm

    if ($scope.Pain.awards != '') $scope.claimsNext = "p2-awards";                      //if awards exist, go to awards
    else if ($scope.Pain.testimonials != '') $scope.claimsNext = "p2-testimonials";     //else if testimonials exist, go to testimonials
    else if ($scope.Pain.faqs != '') $scope.claimsNext = "p2-faqs";                     //else if faqs exist, go to faqs
    else $scope.claimsNext = "p2-affirm";                                               //else, go to affirm

    if ($scope.Pain.testimonials != '') $scope.awardsNext = "p2-testimonials";          //if testimonials exist, go to testimonials
    else if ($scope.Pain.faqs != '') $scope.awardsNext = "p2-faqs";                     //else if faqs exist, go to faqs
    else $scope.awardsNext = "p2-affirm";                                               //else, go to affirm

    if ($scope.Pain.faqs != '') $scope.testimonialsNext = "p2-faqs";                    //if faqs exist, go to faqs
    else $scope.testimonialsNext = "p2-affirm";                                         //else, go to affirm
    // Optional Stuff       --------------------|

    $scope.faqsNext = "p2-affirm";  
    $scope.affirmYes = "p2-yes";
    $scope.affirmMore = "p2-more";
    $scope.affirmNo = "p2-no";


    $scope.noComment = "";
    $scope.moreComment = "";

    var isMoreDisabled = false;
    $scope.moreSubmitClicked = function () {
        if (isMoreDisabled == false) {
            isMoreDisabled = true;
            Materialize.toast('Your comments have been received.', 4000, 'rounded')
            angular.element(document.querySelector('#moreComment')).attr('disabled', "true");;
            $("#moreSubmit").addClass('disabled');
            $scope.sendAnalytics($scope.Pain.spmapId, 'p1-moreComment', 'p1-affirm')
            //console.log("More: " + $scope.moreComment);
            ServiceCall.sendEmail($scope.Pain.spmapId, $scope.Pain.product, "MoreInfo", $scope.moreComment);
        }

        
    }
    var isNoDisabled = false;
    $scope.noSubmitClicked = function () {
        if (isNoDisabled == false) {
            isNoDisabled = true;
            Materialize.toast('Your comments have been received.', 4000, 'rounded')
            angular.element(document.querySelector('#noComment')).attr('disabled', "true");;
            $("#noSubmit").addClass('disabled');
            $scope.sendAnalytics($scope.Pain.spmapId, 'p1-noComment', 'p1-affirm')
            //console.log("No: " + $scope.noComment);
            ServiceCall.sendEmail($scope.Pain.spmapId, $scope.Pain.product, "No", $scope.noComment);
        }

        
    }

    $(document).ready(function () {
        $('.phone-tooltip').tooltip({
            delay: 50,
            html: true,
            position: "bottom",
            tooltip: "Phone number: " + $scope.Person.phone
        });
    });

    $(document).ready(function () {
        $('.email-tooltip').tooltip({
            delay: 50,
            html: true,
            position: "bottom",
            tooltip: "Click to email: " + $scope.Person.email
        });
    });
});

app.controller('p3Ctrl', function ($scope, ServiceCall, $location) {
    $scope.Play = ServiceCall.getPlay();
    $scope.Pain = ServiceCall.getPain3();
    $scope.Person = ServiceCall.getSalesPerson();
    //console.log("p3 Values called");
    ServiceCall.updateCurrentPage($location.path());
    $scope.sendAnalytics = function (spmapId, eventName, nextPage) {
        ServiceCall.sendAnalytics(spmapId, eventName, nextPage);
    }
    // Utility function for this scope.
    // VERTICALLY ALIGN FUNCTION
    function vAlign(id, div) {
        //console.log("vAlign in p3 with id: " + id + ", divider: " + div);
        var ah = $(id).height();
        var ph = window.innerHeight;
        var mh = Math.ceil((ph - ah) / div);
        $(id).css('margin-top', mh);
    };
    $scope.vAlign = vAlign;

    $scope.openYesModal = function () {
        $('#yesModal').openModal();
        ServiceCall.sendEmail($scope.Pain.spmapId, $scope.Pain.product, "Yes", "n/a");
    }
    $scope.openMoreModal = function () {
        $('#moreModal').openModal();
    }
    $scope.openNoModal = function () {
        $('#noModal').openModal();
    }

    // Page Titles
    //$scope.claimsTitle = "Claims3";
    //$scope.awardsTitle = "Awards3";
    //$scope.testimonialsTitle = "Testimonials3";
    $scope.faqsTitle = "Quick answers to some commonly asked questions";

    if ($scope.Pain.productInStock == 'Y') $scope.inStock = "In Stock";
    else $scope.inStock = "";

    // Dynamic Page Links
    $scope.valuesNext = "p3-specs";
    $scope.specsNext = "p3-benefits";
    //$scope.benefitsNext = "p4-competitive";   //Uncomment when competitive screen is ready
    //$scope.competitiveNext = "p4-claims";

    // Optionals stuff      --------------------|
    if ($scope.Pain.claims != '') $scope.benefitsNext = "p3-claims";                    //if claims exist, go to claims
    else if ($scope.Pain.awards != '') $scope.benefitsNext = "p3-awards";               //else if awards exist, go to awards
    else if ($scope.Pain.testimonials != '') $scope.benefitsNext = "p3-testimonials";   //else if testimonials exist, go to testimonials
    else if ($scope.Pain.faqs != '') $scope.benefitsNext = "p3-faqs";                   //else if faqs exist, go to faqs
    else $scope.benefitsNext = "p3-affirm";                                             //else, go to affirm

    if ($scope.Pain.awards != '') $scope.claimsNext = "p3-awards";                      //if awards exist, go to awards
    else if ($scope.Pain.testimonials != '') $scope.claimsNext = "p3-testimonials";     //else if testimonials exist, go to testimonials
    else if ($scope.Pain.faqs != '') $scope.claimsNext = "p3-faqs";                     //else if faqs exist, go to faqs
    else $scope.claimsNext = "p3-affirm";                                               //else, go to affirm

    if ($scope.Pain.testimonials != '') $scope.awardsNext = "p3-testimonials";          //if testimonials exist, go to testimonials
    else if ($scope.Pain.faqs != '') $scope.awardsNext = "p3-faqs";                     //else if faqs exist, go to faqs
    else $scope.awardsNext = "p3-affirm";                                               //else, go to affirm

    if ($scope.Pain.faqs != '') $scope.testimonialsNext = "p3-faqs";                    //if faqs exist, go to faqs
    else $scope.testimonialsNext = "p3-affirm";                                         //else, go to affirm
    // Optional Stuff       --------------------|

    $scope.faqsNext = "p3-affirm";
    $scope.affirmYes = "p3-yes";
    $scope.affirmMore = "p3-more";
    $scope.affirmNo = "p3-no";

    /*May need this for future        
    //$("#pp3-img").css("width", (($("#pp3-img-parent").width()) + "px"));
    //$("#p3-img").css("width", (($("#p3-img-parent").width()) + "px"));
    //$("#v-hr").css("margin-top", (($("#v-hr-parent").height() / 2) + "px"));
    $scope.numRowsTest = $scope.testimonials.length;
    $scope.getRowsTest = function (numRowsTest) {
        return new Array(numRowsTest);
    };*/


    $scope.noComment = "";
    $scope.moreComment = "";

    var isMoreDisabled = false;
    $scope.moreSubmitClicked = function () {
        if (isMoreDisabled == false) {
            isMoreDisabled = true;
            Materialize.toast('Your comments have been received.', 4000, 'rounded')
            angular.element(document.querySelector('#moreComment')).attr('disabled', "true");;
            $("#moreSubmit").addClass('disabled');
            $scope.sendAnalytics($scope.Pain.spmapId, 'p1-moreComment', 'p1-affirm')
            //console.log("More: " + $scope.moreComment);
            ServiceCall.sendEmail($scope.Pain.spmapId, $scope.Pain.product, "MoreInfo", $scope.moreComment);
        }

        
    }
    var isNoDisabled = false;
    $scope.noSubmitClicked = function () {
        if (isNoDisabled == false) {
            isNoDisabled = true;
            Materialize.toast('Your comments have been received.', 4000, 'rounded')
            angular.element(document.querySelector('#noComment')).attr('disabled', "true");;
            $("#noSubmit").addClass('disabled');
            $scope.sendAnalytics($scope.Pain.spmapId, 'p1-noComment', 'p1-affirm')
            //console.log("No: " + $scope.noComment);
            ServiceCall.sendEmail($scope.Pain.spmapId, $scope.Pain.product, "No", $scope.noComment);
        }

        
    }

    $(document).ready(function () {
        $('.phone-tooltip').tooltip({
            delay: 50,
            html: true,
            position: "bottom",
            tooltip: "Phone number: " + $scope.Person.phone
        });
    });

    $(document).ready(function () {
        $('.email-tooltip').tooltip({
            delay: 50,
            html: true,
            position: "bottom",
            tooltip: "Click to email: " + $scope.Person.email
        });
    });
});

app.controller('p4Ctrl', function ($scope, ServiceCall, $location) {
    $scope.Play = ServiceCall.getPlay();
    $scope.Pain = ServiceCall.getPain4();
    $scope.Person = ServiceCall.getSalesPerson();
    //console.log("p4 Values called");
    ServiceCall.updateCurrentPage($location.path());
    $scope.sendAnalytics = function (spmapId, eventName, nextPage) {
        ServiceCall.sendAnalytics(spmapId, eventName, nextPage);
    }
    // Utility function for this scope.
    // VERTICALLY ALIGN FUNCTION
    function vAlign(id, div) {
        //console.log("vAlign in p3 with id: " + id + ", divider: " + div);
        var ah = $(id).height();
        var ph = window.innerHeight;
        var mh = Math.ceil((ph - ah) / div);
        $(id).css('margin-top', mh);
    };
    $scope.vAlign = vAlign;

    $scope.openYesModal = function () {
        $('#yesModal').openModal();
        ServiceCall.sendEmail($scope.Pain.spmapId, $scope.Pain.product, "Yes", "n/a");
    }
    $scope.openMoreModal = function () {
        $('#moreModal').openModal();
    }
    $scope.openNoModal = function () {
        $('#noModal').openModal();
    }

    // Page Titles
    //$scope.claimsTitle = "Claims4";
    //$scope.awardsTitle = "Awards4";
    //$scope.testimonialsTitle = "Testimonials4";
    $scope.faqsTitle = "Quick answers to some commonly asked questions";

    if ($scope.Pain.productInStock == 'Y') $scope.inStock = "In Stock";
    else $scope.inStock = "";

    //Dynamic Links
    $scope.valuesNext = "p4-specs";
    $scope.specsNext = "p4-benefits";
    //$scope.benefitsNext = "p4-competitive";   //Uncomment when competitive screen is ready
    //$scope.competitiveNext = "p4-claims";
    // Optionals stuff      --------------------|
    if ($scope.Pain.claims != '') $scope.benefitsNext = "p4-claims";                    //if claims exist, go to claims
    else if ($scope.Pain.awards != '') $scope.benefitsNext = "p4-awards";               //else if awards exist, go to awards
    else if ($scope.Pain.testimonials != '') $scope.benefitsNext = "p4-testimonials";   //else if testimonials exist, go to testimonials
    else if ($scope.Pain.faqs != '') $scope.benefitsNext = "p4-faqs";                   //else if faqs exist, go to faqs
    else $scope.benefitsNext = "p4-affirm";                                             //else, go to affirm

    if ($scope.Pain.awards != '') $scope.claimsNext = "p4-awards";                      //if awards exist, go to awards
    else if ($scope.Pain.testimonials != '') $scope.claimsNext = "p4-testimonials";     //else if testimonials exist, go to testimonials
    else if ($scope.Pain.faqs != '') $scope.claimsNext = "p4-faqs";                     //else if faqs exist, go to faqs
    else $scope.claimsNext = "p4-affirm";                                               //else, go to affirm

    if ($scope.Pain.testimonials != '') $scope.awardsNext = "p4-testimonials";          //if testimonials exist, go to testimonials
    else if ($scope.Pain.faqs != '') $scope.awardsNext = "p4-faqs";                     //else if faqs exist, go to faqs
    else $scope.awardsNext = "p4-affirm";                                               //else, go to affirm

    if ($scope.Pain.faqs != '') $scope.testimonialsNext = "p4-faqs";                    //if faqs exist, go to faqs
    else $scope.testimonialsNext = "p4-affirm";                                         //else, go to affirm
    // Optional Stuff       --------------------|

    $scope.faqsNext = "p4-affirm";
    $scope.affirmYes = "p4-yes";
    $scope.affirmMore = "p4-more";
    $scope.affirmNo = "p4-no";


    $scope.noComment = "";
    $scope.moreComment = "";

    var isMoreDisabled = false;
    $scope.moreSubmitClicked = function () {
        if (isMoreDisabled == false) {
            isMoreDisabled = true;
            Materialize.toast('Your comments have been received.', 4000, 'rounded')
            angular.element(document.querySelector('#moreComment')).attr('disabled', "true");;
            $("#moreSubmit").addClass('disabled');
            $scope.sendAnalytics($scope.Pain.spmapId, 'p1-moreComment', 'p1-affirm')
            //console.log("More: " + $scope.moreComment);
            ServiceCall.sendEmail($scope.Pain.spmapId, $scope.Pain.product, "MoreInfo", $scope.moreComment);
        }

        
    }
    var isNoDisabled = false;
    $scope.noSubmitClicked = function () {
        if (isNoDisabled == false) {
            isNoDisabled = true;
            Materialize.toast('Your comments have been received.', 4000, 'rounded')
            angular.element(document.querySelector('#noComment')).attr('disabled', "true");;
            $("#noSubmit").addClass('disabled');
            $scope.sendAnalytics($scope.Pain.spmapId, 'p1-noComment', 'p1-affirm')
            //console.log("No: " + $scope.noComment);
            ServiceCall.sendEmail($scope.Pain.spmapId, $scope.Pain.product, "No", $scope.noComment);
        }

        
    }

    $(document).ready(function () {
        $('.phone-tooltip').tooltip({
            delay: 50,
            html: true,
            position: "bottom",
            tooltip: "Phone number: " + $scope.Person.phone
        });
    });

    $(document).ready(function () {
        $('.email-tooltip').tooltip({
            delay: 50,
            html: true,
            position: "bottom",
            tooltip: "Click to email: " + $scope.Person.email
        });
    });
});

app.controller('footerCtrl', function ($scope, ServiceCall) {
    $scope.custImg = "images/Customer.jpg";
    $scope.sendAnalytics = function (spmapId, eventName, nextPage) {
        ServiceCall.sendAnalytics(spmapId, eventName, nextPage);
    }
});









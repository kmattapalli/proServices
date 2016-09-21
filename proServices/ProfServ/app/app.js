var app = angular.module('Sellocity', ['ngRoute', 'ngAnimate', 'ng.deviceDetector', 'ngDialog']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      
        .when('/', {
            templateUrl: '/ProfServ/pages/welcome.html',
            controller: 'welcomeCtrl'
        })
        .when('/painpoints', {
            templateUrl: '/ProfServ/pages/painpoints.html',
            controller: 'painpointsCtrl'
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
        .when('/p1-yes', {
            templateUrl: '/ProfServ/pages/Yes.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-more', {
            templateUrl: '/ProfServ/pages/MoreInfo.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-no', {
            templateUrl: '/ProfServ/pages/No.html',
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
        .when('/p2-yes', {
            templateUrl: '/ProfServ/pages/Yes.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-more', {
            templateUrl: '/ProfServ/pages/MoreInfo.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-no', {
            templateUrl: '/ProfServ/pages/No.html',
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
        .when('/p3-yes', {
            templateUrl: '/ProfServ/pages/Yes.html',
            controller: 'p3Ctrl'
        })
        .when('/p3-more', {
            templateUrl: '/ProfServ/pages/MoreInfo.html',
            controller: 'p3Ctrl'
        })
        .when('/p3-no', {
            templateUrl: '/ProfServ/pages/No.html',
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
        .when('/p4-yes', {
            templateUrl: '/ProfServ/pages/Yes.html',
            controller: 'p4Ctrl'
        })
        .when('/p4-more', {
            templateUrl: '/ProfServ/pages/MoreInfo.html',
            controller: 'p4Ctrl'
        })
        .when('/p4-no', {
            templateUrl: '/ProfServ/pages/No.html',
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
        spid: '',
        Play: { spid:'', clientContact: '', clientName: '', title: '' },
        AllPains: [],
        SessionInfo: { sessionId: 'n/a', spid: '', device: '', browser: '', ip: '', location: 'n/a' },
        currentPage: ''
    };
    
    data.SessionInfo.browser = deviceDetector.browser;
    //data.SessionInfo.os = deviceDetector.os;
    data.SessionInfo.device = deviceDetector.device;
    if (data.SessionInfo.device == "unknown") data.SessionInfo.device = "pc";

    // Set IP Address
    //setIp();
    this.setIP = function(ip) {
        data.SessionInfo.ip = ip;
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

    this.sendAnalytics = function (spmapId, eventName, nextPage) {
        var params = "?spid=" + data.SessionInfo.spid + "&spmapId=" + spmapId + "&sessionID=" + data.SessionInfo.sessionId + "&currentPage=" + data.currentPage + "&eventName=" + eventName + "&nextPage=" + nextPage + "&time=" + getTime() + "&device=" + data.SessionInfo.device + "&browser=" + data.SessionInfo.browser + "&ip=" + data.SessionInfo.ip + "&location=" + data.SessionInfo.location;

        var url = "http://scityws.azurewebsites.net/Service/PutAnalytics/" + params;
        //console.log("Put analytics URL: " + params);
        return $http.get(url).then(function (result) {
            //console.log(result);
            if (result.data != "Success") console.log("Put analytics failed");
            //else console.log("Put analytics success");
        });
    }

    // Get Time
    //console.log(getTime());
    function getTime() {
        return $filter('date')(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }

    
    this.setSpid = function (spid) {
        //console.log("Spid = " + spid);
        data.spid = spid;
        data.Play.spid = spid;
        data.SessionInfo.spid = spid;
    }

    this.getBasic = function (spid) {
        //console.log("Get Data");
        var url = "http://scityws.azurewebsites.net/service/GetSpidInfo/" + spid;
        return $http.get(url);
    }

    this.setBasic = function (result) {
        //console.log("Result" + result.data[0]);
        data.Play.clientContact = result.data[0].CLIENT_CONTACT_NAME;
        //console.log("Clinet Name: " + data.Play.clientContact);
        data.Play.clientName = result.data.CLIENT_NAME;
        data.Play.title = result.data.TITLE;
    };
    this.getSpidMappings = function (spid) {
        //console.log("Get Mappings");
        var url = "http://scityws.azurewebsites.net/service/GetSpidMappings/" + spid;
        $http.get(url).then(function (result) {
            
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

            
        });
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

app.controller('welcomeCtrl', function (ServiceCall, $scope, $http, $location) {
    $("#ibody").addClass("bgImg");
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
    ServiceCall.setSpid(spid);              //Set spid in ServiceCall.data.SessionInfo
    //ServiceCall.setIp();                    //Set IP in ServiceCall.data.SessionInfo
    
    //ServiceCall.sendAnalytics('168', 'welcome', 'urlLoad', 'none');
    ServiceCall.updateCurrentPage($location.path());
    
    //$scope.custName = Data.getName();
    
    //console.log("IP: " + myIP());

    ServiceCall.getBasic(spid).then(function (result) {
        $scope.custName = result.data[0].CLIENT_CONTACT_NAME;
        ServiceCall.setBasic(result);
    });
    ServiceCall.getSpidMappings(spid);

    var url = "https://api.ipify.org?format=json";
    $http.get(url).then(function (result) {
        ServiceCall.setIP(result.data.ip);
        ServiceCall.sendAnalytics('0000','urlLoad', 'none');
    });

    //console.log("Hi");       //but this is printing data: undefined
    $scope.greeting = getGreeting();

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
});

app.controller('painpointsCtrl', function ($scope, ServiceCall, $location) {
    //console.log("ClientName = " + ServiceCall.getPlay().clientContact)
    $("#ibody").removeClass("bgImg");

    $scope.ppTitle = ServiceCall.getPlay().title;
    $scope.Pain1 = ServiceCall.getPain1();
    $scope.Pain2 = ServiceCall.getPain2();
    $scope.Pain3 = ServiceCall.getPain3();
    $scope.Pain4 = ServiceCall.getPain4();

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

app.controller('p1Ctrl', function ($scope, ServiceCall, $location) {
    $scope.Play = ServiceCall.getPlay();
    $scope.Pain = ServiceCall.getPain1();

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
    $scope.valuesNext = "p1-specs";
    $scope.specsNext = "p1-benefits";
    //$scope.benefitsNext = "p2-competitive";   //Uncomment when competitive screen is ready
    //$scope.competitiveNext = "p2-claims";

    // Optionals stuff      --------------------|
    if ($scope.Pain.claims != '') $scope.benefitsNext = "p1-claims";                    //if claims exist, go to claims
    else if ($scope.Pain.awards != '') $scope.benefitsNext = "p1-awards";               //else if awards exist, go to awards
    else if ($scope.Pain.testimonials != '') $scope.benefitsNext = "p1-testimonials";   //else if testimonials exist, go to testimonials
    else if ($scope.Pain.faqs != '') $scope.benefitsNext = "p1-faqs";                   //else if faqs exist, go to faqs
    else $scope.benefitsNext = "p1-affirm";                                             //else, go to affirm

    if ($scope.Pain.awards != '') $scope.claimsNext = "p1-awards";                      //if awards exist, go to awards
    else if ($scope.Pain.testimonials != '') $scope.claimsNext = "p1-testimonials";     //else if testimonials exist, go to testimonials
    else if ($scope.Pain.faqs != '') $scope.claimsNext = "p1-faqs";                     //else if faqs exist, go to faqs
    else $scope.claimsNext = "p1-affirm";                                               //else, go to affirm

    if ($scope.Pain.testimonials != '') $scope.awardsNext = "p1-testimonials";          //if testimonials exist, go to testimonials
    else if ($scope.Pain.faqs != '') $scope.awardsNext = "p1-faqs";                     //else if faqs exist, go to faqs
    else $scope.awardsNext = "p1-affirm";                                               //else, go to affirm

    if ($scope.Pain.faqs != '') $scope.testimonialsNext = "p1-faqs";                    //if faqs exist, go to faqs
    else $scope.testimonialsNext = "p1-affirm";                                         //else, go to affirm
    // Optional Stuff       --------------------|

    $scope.faqsNext = "p1-affirm";
    $scope.affirmYes = "p1-yes";
    $scope.affirmMore = "p1-more";
    $scope.affirmNo = "p1-no";

    /*May need this for future        
    //$("#pp1-img").css("width", (($("#pp1-img-parent").width()) + "px"));
    //$("#p1-img").css("width", (($("#p1-img-parent").width()) + "px"));
    //$("#v-hr").css("margin-top", (($("#v-hr-parent").height() / 2) + "px"));
    $scope.numRowsTest = $scope.testimonials.length;
    $scope.getRowsTest = function (numRowsTest) {
        return new Array(numRowsTest);
    };*/
});

app.controller('p2Ctrl', function ($scope, ServiceCall, $location) {
    $scope.Play = ServiceCall.getPlay();
    $scope.Pain = ServiceCall.getPain2();

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
});

app.controller('p3Ctrl', function ($scope, ServiceCall, $location) {
    $scope.Play = ServiceCall.getPlay();
    $scope.Pain = ServiceCall.getPain3();

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
});

app.controller('p4Ctrl', function ($scope, ServiceCall, $location) {
    $scope.Play = ServiceCall.getPlay();
    $scope.Pain = ServiceCall.getPain4();

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
});

app.controller('footerCtrl', function ($scope, ServiceCall) {
    $scope.custImg = "images/Customer.jpg";
    $scope.sendAnalytics = function (spmapId, eventName, nextPage) {
        ServiceCall.sendAnalytics(spmapId, eventName, nextPage);
    }
});







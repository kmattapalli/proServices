var app = angular.module('Sellocity', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      
      .when('/', {
          templateUrl: '/pages/welcome.html',
          controller: 'welcomeCtrl'
      })
      .when('/painpoints', {
          templateUrl: '/pages/painpoints.html',
          controller: 'painpointsCtrl'
      })
      .when('/p1-values', {
          templateUrl: '/pages/Values.html',
          controller: 'p1Ctrl'
      })
      .when('/p1-specs', {
          templateUrl: '/pages/Specs.html',
          controller: 'p1Ctrl'
      })
        .when('/p1-benefits', {
            templateUrl: '/pages/Benefits.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-claims', {
            templateUrl: '/pages/Claims.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-awards', {
            templateUrl: '/pages/Awards.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-testimonials', {
            templateUrl: '/pages/Testimonials.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-faqs', {
            templateUrl: '/pages/Faqs.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-affirm', {
            templateUrl: '/pages/Affirm.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-yes', {
            templateUrl: '/pages/Yes.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-more', {
            templateUrl: '/pages/MoreInfo.html',
            controller: 'p1Ctrl'
        })
        .when('/p1-no', {
            templateUrl: '/pages/No.html',
            controller: 'p1Ctrl'
        })
        .when('/p2-values', {
            templateUrl: '/pages/Values.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-specs', {
            templateUrl: '/pages/Specs.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-benefits', {
            templateUrl: '/pages/Benefits.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-claims', {
            templateUrl: '/pages/Claims.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-awards', {
            templateUrl: '/pages/Awards.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-testimonials', {
            templateUrl: '/pages/Testimonials.html',
            controller: 'p2Ctrl'
        })
        .when('/p2-faqs', {
            templateUrl: '/pages/Faqs.html',
            controller: 'p2Ctrl'
        })


  .otherwise({
      redirectTo: '/'
  });
}]);

app.service('ServiceCall', function ($http) {
    var data = {
        Play: { clientContact: '', clientName: '', title: '' },
        AllPains: [],
        AllValues: [],
    };
    this.getBasic = function (spid) {
        console.log("Get Data");
        var url = "http://scityws.azurewebsites.net/service/GetSpidInfo/" + spid;
        return $http.get(url);
    }
    this.setBasic = function (result) {
        console.log("Result" + result.data[0]);
        data.Play.clientContact = result.data[0].CLIENT_CONTACT_NAME;
        console.log("Clinet Name: " + data.Play.clientContact);
        data.Play.clientName = result.data.CLIENT_NAME;
        data.Play.title = result.data.TITLE;
    };
    this.getSpidMappings = function (spid) {
        console.log("Get Mappings");
        var url = "http://scityws.azurewebsites.net/service/GetSpidMappings/" + spid;
        $http.get(url).then(function (result) {
            
            angular.forEach(result.data, function (value, key) {
                var Pain = { index: '', title:'', spmapId: '', painPoint: '', painPointImage: '', product: '', productImage: '', productInStock: '', values: [], benefits: [] };
                Pain.index = key + 1;
                Pain.title = value.TITLE;
                Pain.spmapId = value.SPMAP_ID;
                Pain.painPoint = value.PAIN_POINT;
                Pain.painPointImage = "Images/" + value.PAIN_POINT_IMAGE;
                Pain.product = value.PRODUCT_NAME;
                Pain.productImage = "Images/" + value.PRODUCT_IMAGE;
                Pain.productInStock = value.PRODUCT_IN_STOCK;
               
                var url = "http://scityws.azurewebsites.net/service/GetProductValues/" + Pain.spmapId;
                $http.get(url).then(function (result) {
                    var val = [];
                    angular.forEach(result.data, function (value, key) {
                        val.push(value.VALUE);
                    });
                    //console.log("Val for spmapID " + value.spmapId + " are: " + val);
                    Pain.values = val;
                });
                var url = "http://scityws.azurewebsites.net/service/GetProductBenefits/" + Pain.spmapId;
                $http.get(url).then(function (result) {
                    var ben = [];
                    angular.forEach(result.data, function (value, key) {
                        ben.push(value.BENEFIT);
                    });
                    //console.log("Val for spmapID " + value.spmapId + " are: " + val);
                    Pain.benefits = ben;
                });

                //console.log("Pain: " + JSON.stringify(Pain, null, 4));
                data.AllPains.push(Pain);
            });
        });
    }
    this.getAllValues = function () {
        angular.forEach(data.AllPains, function (value, key) {
            var val = [];
            //console.log(key + ":" + value.spmapId + ", " + value.painPoint);
            
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

app.factory('factory', function ($http) {
    /*register the interceptor as a service
    $provide.factory('myHttpInterceptor', function ($q) {
        return {
            'responseError': function (rejection) {
                if (rejection.status == 0) {
                    location.reload();
                }
                return $q.reject(rejection);
            }
        };
    });

    $provide.factory('myHttpInterceptor', function ($q) {
        return function (promise) {
            return promise.then(function (success) {
                return success;
            }, function (rejection) {
                if (rejection.status == 0) {
                    location.reload();
                }
                return $q.reject(rejection);
            });
        };
    });

    $httpProvider.interceptors.push('myHttpInterceptor');
    */
    var spid = 1;
    
    var myfunction = function($scope, ServiceCall) {
        var myDataPromise = getData();
        myDataPromise.then(function (result) {
            
            // this is only run after getData() resolves
            $scope.data = result;
            // Set data values
            data.Play.clientContact = $scope.data.clientContactName;
            console.log("data.name" + data.Play.clientContact);
        });
    }

    return {
        getPlay: function () { return data.Play; },
        setName: function (Name) { data.Name = Name; },

        getProduct1: function () { return data.Product1; },
        setProduct1: function (Product1) { data.Product1 = Product1; },

        getPP1: function () { return data.PP1; },
        setPP1: function (PP1) { data.PP1 = PP1; },

        getP1Img: function () { return data.P1Img; },
        setP1Img: function (P1Img) { data.P1Img = P1Img; }
    };
});

app.controller('p1Ctrl', function ($scope, ServiceCall) {
    $scope.Play = ServiceCall.getPlay();
    $scope.Pain = ServiceCall.getPain1();
    //console.log("Custname: " + $scope.Play.clientContact);

    //console.log("P1 Values called");

    // Utility function for this scope.
    // VERTICALLY ALIGN FUNCTION
    function vAlign(id, div) {
        //console.log("vAlign in P1 with id: " + id + ", div: " + div);
        var ah = $(id).height();
        var ph = window.innerHeight;
        var mh = Math.ceil((ph - ah) / div);
        $(id).css('margin-top', mh);
    };

    // Changes the links in pages dynamically
    $scope.ppId = 1;

    // Basic Info
    //$scope.custName = Data.getName();
    //Data.setProduct1("Vaio-Z");
    //$scope.prod1 = Data.getProduct1();

    // P1 Values
    $scope.valuesTitle = "Vaio's perspective of GPU Boost";
    $scope.values = $scope.Pain.values;
    //console.log("P1 Ctrl Values: " + $scope.values);
    /*$scope.values = [
        "Industry highest frames per second",
        "Hardware agnostic code",
        "Global memory coalscing",
        "Lowest wattage per performance"
    ];*/
        
    vAlign("#p1-values-wrapper", 4);
    //$("#pp1-img").css("width", (($("#pp1-img-parent").width()) + "px"));
    //$("#p1-img").css("width", (($("#p1-img-parent").width()) + "px"));
    //$("#v-hr").css("margin-top", (($("#v-hr-parent").height() / 2) + "px"));


    // P1 Specs
    $scope.specsTitle = "Product 1 Specs"
    $scope.openTab1 = function () {
        $scope.specsUrl = 'https://www.google.com';
    }
    $scope.openTab2 = function () {
        $scope.manualUrl = 'https://www.bing.com';
    }

    // P1 Benefits
    $scope.benefitsTitle = "Vaio Z Benefits";
    $scope.benefits = $scope.Pain.values;
    //console.log("P1 Ctrl Benefits: " + $scope.benefits);
/*    $scope.benefits = [
        "Lowest cost per wattage",
        "CPU independent acceleration",
        "Fastest memory reads in the industry",
        "Award winning cooling algorithms",
        "Test"
    ]; 
*/
    vAlign("#p1-benefits-wrapper", 4);

    //P1 Claims
    $scope.claimsTitle = "Claims";

    $scope.claims = [[{ claimImg: "Images/Claim1.jpg" }, { claimImg: "Images/Claim2.jpg" }]];
    $scope.numRowsClaims = $scope.claims.length;
    $scope.getRowsClaims = function (numRowsClaims) {
        return new Array(numRowsClaims);
    };
    vAlign("#claims-content", 4);

    //P1 Awards
    $scope.awardsTitle = "Awards";

    $scope.awards = [[{ awardImg: "Images/Award1.jpg" }, { awardImg: "Images/Award2.jpg" }],
                       [{ awardImg: "Images/Award3.jpg" }]];
    $scope.numRowsAwards = $scope.awards.length;
    $scope.getRowsAwards = function (numRowsAwards) {
        return new Array(numRowsAwards);
    };
    vAlign("#awards-content", 20);

    //P1 Testimonials
    $scope.testimonialsTitle = "Testimonials";

    $scope.testimonials = [[{ testimonialImg: "Images/Claim1.jpg" }, { testimonialImg: "Images/Claim2.jpg" }]];
    $scope.numRowsTest = $scope.testimonials.length;
    $scope.getRowsTest = function (numRowsTest) {
        return new Array(numRowsTest);
    };
    vAlign("#testimonials-content", 4);

    //P1 FAQs
    $scope.faqsTitle = "Quick answers to some commonly asked questions";
    $scope.faqs = [
        { q: "Does it do RDIMM 1", a: "Yes" },
        { q: "Does it do RDIMM 2", a: "No" },
        { q: "Does it do RDIMM 3", a: "Yes" },
        { q: "Does it do RDIMM 4", a: "No" },
        { q: "Does it do RDIMM 5", a: "Yes" }
    ];
    vAlign("#p1-faqs-wrapper", 4);

    // P1 Affirmation screen
    $scope.affirmTitle = "Affirm";
    //$scope.pp1 = Data.getPP1();
    //$scope.p1Img = Data.getP1Img();
    $scope.p1Stock = "In Stock";
});

app.controller('p2Ctrl', function ($scope, ServiceCall) {
    $scope.Play = ServiceCall.getPlay();
    $scope.Pain = ServiceCall.getPain2();
    //console.log("P2 Values called");

    // Utility function for this scope.
    // VERTICALLY ALIGN FUNCTION
    function vAlign(id, div) {
        //console.log("vAlign in P1 with id: " + id + ", div: " + div);
        var ah = $(id).height();
        var ph = window.innerHeight;
        var mh = Math.ceil((ph - ah) / div);
        $(id).css('margin-top', mh);
    };

    // Changes the links in pages dynamically
    $scope.ppId = 2;

    // P2 Values
    $scope.valuesTitle = "Vaio's perspective of GPU Boost2";
    $scope.values = $scope.Pain.values;
    //console.log("P2 Ctrl Values: " + $scope.values);
  /*  $scope.values = [
        "Industry highest frames per second2",
        "Hardware agnostic code2",
        "Global memory coalscing2",
        "Lowest wattage per performance2"
    ];*/

    vAlign("#p1-values-wrapper", 4);
    //$("#pp1-img").css("width", (($("#pp1-img-parent").width()) + "px"));
    //$("#p1-img").css("width", (($("#p1-img-parent").width()) + "px"));
    //$("#v-hr").css("margin-top", (($("#v-hr-parent").height() / 2) + "px"));

    // P2 Specs
    $scope.specsTitle = "Product 2 Specs"
    $scope.openTab1 = function () {
        $scope.specsUrl = 'https://www.google.com';
    }
    $scope.openTab2 = function () {
        $scope.manualUrl = 'https://www.bing.com';
    }

    // P2 Benefits
    $scope.benefitsTitle = "Vaio Z Benefits2";
    $scope.benefits = $scope.Pain.benefits;
    //console.log("P2 Ctrl Benefits: " + $scope.benefits);
/*    $scope.benefits = [
        "Lowest cost per wattage2",
        "CPU independent acceleration2",
        "Fastest memory reads in the industry2",
        "Award winning cooling algorithms2",
        "Test"
    ];
 */
  vAlign("#p1-benefits-wrapper", 4);

    //P2 Claims
    $scope.claimsTitle = "Claims2";

    $scope.claims = [[{ claimImg: "Images/Claim1.jpg" }, { claimImg: "Images/Claim2.jpg" }]];
    $scope.numRowsClaims = $scope.claims.length;
    $scope.getRowsClaims = function (numRowsClaims) {
        return new Array(numRowsClaims);
    };
    vAlign("#claims-content", 4);

    //P2 Awards
    $scope.awardsTitle = "Awards2";

    $scope.awards = [[{ awardImg: "Images/Award1.jpg" }, { awardImg: "Images/Award2.jpg" }],
                       [{ awardImg: "Images/Award3.jpg" }]];
    $scope.numRowsAwards = $scope.awards.length;
    $scope.getRowsAwards = function (numRowsAwards) {
        return new Array(numRowsAwards);
    };
    vAlign("#awards-content", 20);

    //P2 Testimonials
    $scope.testimonialsTitle = "Testimonials2";

    $scope.testimonials = [[{ testimonialImg: "Images/Claim1.jpg" }, { testimonialImg: "Images/Claim2.jpg" }]];
    $scope.numRowsTest = $scope.testimonials.length;
    $scope.getRowsTest = function (numRowsTest) {
        return new Array(numRowsTest);
    };
    vAlign("#testimonials-content", 4);

    //P2 FAQs
    $scope.faqsTitle = "Quick answers to some commonly asked questions2";
    $scope.faqs = [
        { q: "Does it do RDIMM2 1", a: "Yes2" },
        { q: "Does it do RDIMM2 2", a: "No2" },
        { q: "Does it do RDIMM2 3", a: "Yes2" },
        { q: "Does it do RDIMM2 4", a: "No2" },
        { q: "Does it do RDIMM2 5", a: "Yes2" }
    ];
    vAlign("#p1-faqs-wrapper", 4);
});

app.controller('painpointsCtrl', function ($scope, ServiceCall) {
    //console.log("ClientName = " + ServiceCall.getPlay().clientContact)
    ServiceCall.getAllValues();
    $("#ibody").removeClass("bgImg");

    $scope.ppTitle = ServiceCall.getPlay().title;
    $scope.Pain1 = ServiceCall.getPain1();
    $scope.Pain2 = ServiceCall.getPain2();
    $scope.Pain3 = ServiceCall.getPain3();
    $scope.Pain4 = ServiceCall.getPain4();
    //console.log("PP1 Label: " + $scope.Pain1.painPoint);
    //console.log("Values for spmap " + $scope.Pain1.spmapId + " are: " + $scope.Pain1.values);
    //Data.setPP1("GPU Boost");
    //Data.setP1Img("Images/p1.jpg");
    
    $scope.painpoints = [[{ ppId: 1, ppImg: "Images/PP1.jpg", ppLabel: "GPU" },
                          { ppId: 2, ppImg: "Images/PP2.jpg", ppLabel: "RAM Speeds" }],
                         [{ ppId: 3, ppImg: "Images/PP3.jpg", ppLabel: "4K Rendering" },
                          { ppId: 4, ppImg: "Images/PP4.jpg", ppLabel: "Anything else?" }]];
    $scope.numRows = $scope.painpoints.length;
    $scope.getRows = function (numRows) {
        return new Array(numRows);
    };
    
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

app.controller('footerCtrl', function ($scope) {
    $scope.custImg = "images/Customer.jpg";
});



app.controller('welcomeCtrl', function (ServiceCall, $scope) {
    $("#ibody").addClass("bgImg");
    var spid = 1;

    //$scope.custName = Data.getName();
    ServiceCall.getBasic(spid).then(function (result) {
        $scope.custName = result.data[0].CLIENT_CONTACT_NAME;
        ServiceCall.setBasic(result);
    });
    ServiceCall.getSpidMappings(spid);
    

    //console.log("Hi");       //but this is printing data: undefined
    $scope.greeting = getGreeting();
    //$scope.firstName = "Saket";
    $scope.lastName = "Ati";

    
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



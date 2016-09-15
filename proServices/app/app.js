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

app.factory('Data', function () {

    var data = {
        Name: '',
        Product1: '',
        PP1: ''
    };

    return {
        getName: function () { return data.Name; },
        setName: function (Name) { data.Name = Name; },

        getProduct1: function () { return data.Product1; },
        setProduct1: function (Product1) { data.Product1 = Product1; },

        getPP1: function () { return data.PP1; },
        setPP1: function (PP1) { data.PP1 = PP1 }
    };
});
app.controller('p1Ctrl', function ($scope, Data) {
    //console.log("P1 Values called");

    // Utility function for this scope.
    // VERTICALLY ALIGN FUNCTION
    function vAlign(id, div) {
        console.log("vAlign in P1 with id: " + id + ", div: " + div);
        var ah = $(id).height();
        var ph = window.innerHeight;
        var mh = Math.ceil((ph - ah) / div);
        $(id).css('margin-top', mh);
    };

    // Changes the links in pages dynamically
    $scope.ppId = 1;

    // Basic Info
    $scope.custName = Data.getName();
    Data.setProduct1("Vaio-Z");
    $scope.prod1 = Data.getProduct1();

    // P1 Values
    $scope.valuesTitle = "Vaio's perspective of GPU Boost";
    $scope.values = [
        "Industry highest frames per second",
        "Hardware agnostic code",
        "Global memory coalscing",
        "Lowest wattage per performance"
    ];
        
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
    $scope.benefits = [
        "Lowest cost per wattage",
        "CPU independent acceleration",
        "Fastest memory reads in the industry",
        "Award winning cooling algorithms",
        "Test"
    ];    
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
    $scope.pp1 = Data.getPP1();
});

app.controller('p2Ctrl', function ($scope) {
    //console.log("P2 Values called");

    // Utility function for this scope.
    // VERTICALLY ALIGN FUNCTION
    function vAlign(id, div) {
        console.log("vAlign in P1 with id: " + id + ", div: " + div);
        var ah = $(id).height();
        var ph = window.innerHeight;
        var mh = Math.ceil((ph - ah) / div);
        $(id).css('margin-top', mh);
    };

    // Changes the links in pages dynamically
    $scope.ppId = 2;

    // P2 Values
    $scope.valuesTitle = "Vaio's perspective of GPU Boost2";
    $scope.values = [
        "Industry highest frames per second2",
        "Hardware agnostic code2",
        "Global memory coalscing2",
        "Lowest wattage per performance2"
    ];

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
    $scope.benefits = [
        "Lowest cost per wattage2",
        "CPU independent acceleration2",
        "Fastest memory reads in the industry2",
        "Award winning cooling algorithms2",
        "Test"
    ];
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

app.controller('painpointsCtrl', function ($scope, Data) {
    $("#ibody").removeClass("bgImg");

    $scope.ppTitle = "What are your pain points?";
    Data.setPP1("GPU Boost");
    
    $scope.painpoints = [[{ ppId: 1, ppImg: "Images/PP1.jpg", ppLabel: Data.getPP1() },
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

app.service('ServiceCall', function ($http) {
    this.getSalesPlay = function(spid) {
        var url = "http://mala-ws.azurewebsites.net/selloCityWeb/customer/getsalesplay/" + spid;
        return $http.get(url);
    }
});

app.controller('welcomeCtrl', function (ServiceCall, $scope, Data) {
    $("#ibody").addClass("bgImg");
    var spid = 10;
    $scope.r = {};
    ServiceCall.getSalesPlay(spid).then(function (d) {
        $scope.r = d.data;
        console.log(d.data);      //This is printing Object {spid: 10, clientContactDesignation: null, clientContactEmail: "ravi@test.com", clientContactName: "Ravi", clientName: null…}  
        $scope.custName = d.data.clientContactName;
        Data.setName($scope.custName);
    });

    console.log("data: " + $scope.r);       //but this is printing data: undefined
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



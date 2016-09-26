var app = angular.module('SellocityCore', ['ngRoute', 'ngDialog']);
app.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
app.directive("ajaxCloak", ['$interval', '$http', function ($interval, $http) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            let stop = $interval(() => {
                if ($http.pendingRequests.length === 0) {
                    $interval.cancel(stop);
                    attrs.$set("ajaxCloak", undefined);
                    element.removeClass("ajax-cloak");
                }
            }, 100);

        }
    };
}]);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/create_play.html', {
            templateUrl: '/CorePlatform/pages/create_play.html',
            controller: 'createPlay'
        })
        .when('/create_play_1.html', {
            templateUrl: '/CorePlatform/pages/create_play_1.html',
            controller: 'createPlay1'
        })
        .when('/create_play_2.html', {
            templateUrl: '/CorePlatform/pages/create_play_2.html',
            controller: 'createPlay2'
        })
    .otherwise({
        redirectTo: '/create_play.html'
    });
}]);

app.service('ServiceCall', function ($http, $filter, $location) {
    var data = {
        suid: '2',
        spid: '122',
        SalesPerson: { firstName: '', lastName: '', phone: '', email: '', image: '' },
        BasicPlayInfo: { playName: '', clientName: '', clientContactName: '', clientContactEmail: '', customerImage: '' },
        Painpoints: [{ SPMAP_ID: '', TITLE: '', PAIN_POINT: '', PAIN_POINT_IMAGE: '', PRODUCT_NAME: '', PRODUCT_INFO: '', PRODUCT_IMAGE: '', PRODUCT_IN_STOCK: '', DATE_CREATED: '', LASTUPDATED_DATE: '', SPID: '', PRODUCT_ID: '', CSTATUS: '' }, { SPMAP_ID: '', TITLE: '', PAIN_POINT: '', PAIN_POINT_IMAGE: '', PRODUCT_NAME: '', PRODUCT_INFO: '', PRODUCT_IMAGE: '', PRODUCT_IN_STOCK: '', DATE_CREATED: '', LASTUPDATED_DATE: '', SPID: '', PRODUCT_ID: '', CSTATUS: '' }, { SPMAP_ID: '', TITLE: '', PAIN_POINT: '', PAIN_POINT_IMAGE: '', PRODUCT_NAME: '', PRODUCT_INFO: '', PRODUCT_IMAGE: '', PRODUCT_IN_STOCK: '', DATE_CREATED: '', LASTUPDATED_DATE: '', SPID: '', PRODUCT_ID: '', CSTATUS: '' }, { SPMAP_ID: '', TITLE: '', PAIN_POINT: '', PAIN_POINT_IMAGE: '', PRODUCT_NAME: '', PRODUCT_INFO: '', PRODUCT_IMAGE: '', PRODUCT_IN_STOCK: '', DATE_CREATED: '', LASTUPDATED_DATE: '', SPID: '', PRODUCT_ID: '', CSTATUS: '' } ],
    };
    this.sendSpidMappings = function (Painpoints) {
        data.Painpoints = Painpoints;
        var url = "http://scityws.azurewebsites.net/Service/CreatePainPoints/?";
        var params = "spid=" + data.spid + "&pp1=" + Painpoints[0].PAIN_POINT + "&pp2=" + Painpoints[1].PAIN_POINT + "&pp3=" + Painpoints[2].PAIN_POINT + "&pp4=" + Painpoints[3].PAIN_POINT + "&suid=" + data.suid;
        url = url + encodeURI(params);
        console.log("Send Spid Mappings Params: " + params);
        console.log("URL: " + url);
        //return $http.get(url).then(function (result) {
            //angular.forEach(result.data, function (value, key) {
                //data.Painpoints.SPMAP_ID = value.SPMAP_ID;
            //});
            //console.log("Painpoints: " + JSON.stringify(data.Painpoints, null, 4));
            $location.path("/create_play_2.html");
        //});
    }
    this.getSpidMappings = function () {
        return data.Painpoints;
    }
    this.getSpidMappingsDB = function () {
        var email = "atisaket@gmail.com";
        // Get product values
        var url = "http://scityws.azurewebsites.net/service/GetSpidMappings/" + data.spid;
        return $http.get(url).then(function (result) {
            angular.forEach(result.data, function (value, key) {
                var Pain = value;
                data.Painpoints[key] = Pain;
            });
            console.log(data.Painpoints);
        });
    }

    this.getSalesPersonDB = function () {
        var email = "atisaket@gmail.com";
        // Get product values
        var url = "http://scityws.azurewebsites.net/service/GetSalesPersonInfo/" + data.suid;
        return $http.get(url).then(function (result) {
            data.SalesPerson = result.data[0];
            return data.SalesPerson;
        });
    }
    this.getSalesPerson = function () {
        return data.SalesPerson;
    }

    this.setBasicPlayInfo = function (Play) {
        data.BasicPlayInfo.playName = Play.playName;
        data.BasicPlayInfo.clientName = Play.clientName;
        data.BasicPlayInfo.clientContactName = Play.clientContactName;
        data.BasicPlayInfo.clientContactEmail = Play.clientContactEmail;
        data.BasicPlayInfo.customerImage = Play.customerImage;
        console.log(data.BasicPlayInfo);
    };
    this.getBasicPlayInfo = function () {
        return data.BasicPlayInfo;
    };
    this.getBasicPlayInfoDB = function () {
        //console.log("Get Data");
        var url = "http://scityws.azurewebsites.net/service/GetSpidInfo/" + data.spid;
        return $http.get(url).then(function (result) {
            data.BasicPlayInfo = result.data[0];
            return data.BasicPlayInfo;
        });
    }

    this.sendBasicPlay = function (Play) {
        var url = "http://scityws.azurewebsites.net/Service/CreateSpid/?";
        var params = "splayname=" + Play.playName + "&client=" + Play.clientName + "&ccname=" + Play.clientContactName + "&ccemail=" + Play.clientContactEmail + "&custimage=" + Play.customerImage + "&suid=" + data.suid;
        console.log("Send Basic Play params = " + encodeURI(params));
        url = url + encodeURI(params);
        //console.log("URL: " + url);
        //return $http.get(url).then(function (result) {
            //data.spid = result.data[0];
        //alert("SPID created = " + data.spid);
        $location.path("/create_play_1.html");
        //});
    };
});

app.controller('createPlay', function (ServiceCall, $scope) {
    var vAlign = function () {
        var ah = $("#createPlayWrapper").height();
        var ph = window.innerHeight;
        var mh = Math.ceil((ph - ah) / 2);
        console.log("mh= " + mh);
        $("#createPlayWrapper").css('margin-top', mh);
    };
    vAlign();
    ServiceCall.getSalesPersonDB();
    $scope.BasicPlayInfo = { playName: '', clientName: '', clientContactName: '', clientContactEmail: '', customerImage: '' };
    
    $scope.send = function () {
        if (!$scope.createPlayForm.playName.$valid) {
            $(playName).addClass("invalid");
        }
        if (!$scope.createPlayForm.clientName.$valid) {
            $(clientName).addClass("invalid");
        }
        if (!$scope.createPlayForm.receiverName.$valid) {
            $(receiverName).addClass("invalid");
        }
        if (!$scope.createPlayForm.receiverEmail.$valid) {
            $(receiverEmail).addClass("invalid");
        }
        if (!$scope.createPlayForm.custImage.$valid) {
            $(image).addClass("invalid");
        }
        if (!$scope.createPlayForm.playName.$valid || !$scope.createPlayForm.clientName.$valid || !$scope.createPlayForm.receiverName.$valid) {
            Materialize.toast('Please enter all required fields.', 4000, 'rounded');
        }
        else if ($scope.createPlayForm.playName.$valid && $scope.createPlayForm.clientName.$valid && $scope.createPlayForm.receiverName.$valid && !$scope.createPlayForm.receiverEmail.$valid) {
            Materialize.toast('Please enter a valid email.', 4000, 'rounded');
        }
        else if ($scope.createPlayForm.playName.$valid && $scope.createPlayForm.clientName.$valid && $scope.createPlayForm.receiverName.$valid && $scope.createPlayForm.receiverEmail.$valid && !$scope.createPlayForm.custImage.$valid) {
            Materialize.toast('Please upload a picture.', 4000, 'rounded');
        }
        else {
            ServiceCall.setBasicPlayInfo($scope.BasicPlayInfo);
            ServiceCall.sendBasicPlay($scope.BasicPlayInfo);
        }
    }
});

app.controller('createPlay1', function (ServiceCall, $scope, $document) {
    ServiceCall.getBasicPlayInfoDB().then(function () {
        $scope.BasicPlayInfo = ServiceCall.getBasicPlayInfo();
    });
    ServiceCall.getSalesPersonDB().then(function () {
        $scope.SalesPersonInfo = ServiceCall.getSalesPerson();
    });
    ServiceCall.getSpidMappingsDB().then(function () {
        $scope.Painpoints = ServiceCall.getSpidMappings();
        if ($scope.Painpoints[0].PAIN_POINT != '') $("#pp1label").addClass("active");
        if ($scope.Painpoints[1].PAIN_POINT != '') $("#pp2label").addClass("active");
        if ($scope.Painpoints[2].PAIN_POINT != '') $("#pp3label").addClass("active");
        if ($scope.Painpoints[3].PAIN_POINT != '') $("#pp4label").addClass("active");
    });
    $scope.next = function () {
        ServiceCall.sendSpidMappings($scope.Painpoints);
    }
});

app.controller('createPlay2', function (ServiceCall, $scope, $document) {
    ServiceCall.getBasicPlayInfoDB().then(function () {
        $scope.BasicPlayInfo = ServiceCall.getBasicPlayInfo();
    });
    ServiceCall.getSalesPersonDB().then(function () {
        $scope.SalesPersonInfo = ServiceCall.getSalesPerson();
    });
    ServiceCall.getSpidMappingsDB().then(function () {
        //$scope.Painpoints = ;
        
        $scope.Painpoints = ServiceCall.getSpidMappings().filter(function (item) {
            return item.SPMAP_ID !== "";
        });
        $('.collapsible').collapsible({
            accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
        $('#pp1').addClass("active");
        console.log("Painpoints: " + JSON.stringify($scope.Painpoints, null, 4));
        //if ($scope.Painpoints[0].PAIN_POINT != '') $("#pp1label").addClass("active");
        //if ($scope.Painpoints[1].PAIN_POINT != '') $("#pp2label").addClass("active");
        //if ($scope.Painpoints[2].PAIN_POINT != '') $("#pp3label").addClass("active");
        //if ($scope.Painpoints[3].PAIN_POINT != '') $("#pp4label").addClass("active");
    });
    $scope.next = function () {
        ServiceCall.sendSpidMappings($scope.Painpoints);
    }
});
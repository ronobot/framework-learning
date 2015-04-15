r = [1,2,3];

console.log("service:",r);
        r.reverse();
        console.log("reverse'd:",r);
        r.push("CHANG'D");
        console.log("changed:",r);
        r = [];
        console.log("emptied:",r);

var testApp = angular.module('testApp', []);

testApp.controller('SearchController', function ($scope, discogsAPIservice, updateResults) {

    $scope.search = {
        artist: null,
        title: null
    };

    $scope.ganglionReef = window.ganglionReef;

    $scope.formSubmit = function() {
        /*
        // console.log("formed");
        discogsAPI.getReleases($scope).success(function(response,status) {
            // console.log("success",response.data);
            updateResults.update(response.data.results);
        }).error(function(response,status) {
            // console.log("error",response,status);
        });;
        */
        console.log("original: ",$scope.ganglionReef);
        updateResults.update($scope.ganglionReef);
    };

});

testApp.controller('ResultsController', function ($scope, $filter, updateResults) {
    $scope.results = [{
        thumb: "http://f1.bcbits.com/img/a1111283447_2.jpg",
        title: "White Spaces",
        year: "2014"
    }];
    $scope.results = [];
    $scope.cards = [];

    $scope.demolitionPlot = window.demolitionPlot;

    $scope.cards = $scope.demolitionPlot;

    $scope.$on("update", function (event) {
        // $scope.results = updateResults.data;
        // $scope.cards = updateResults.data;
        jQuery.merge($scope.cards,updateResults.data);
    });
});

testApp.factory('discogsAPIservice', function ($http) {

    discogsAPI = {};

    discogsAPI.getReleases = function($scope) {
        return $http({
            method: 'JSONP',
            url: 'https://api.discogs.com/database/search',
            params: {
                key: 'CbmQBdMQZRkYcSwEbfBJ',
                secret: 'ICTZsmvsZVSWzhmxlDBYMKnePnDzcHZW',
                artist: $scope.search.artist,
                release_title: $scope.search.title,
                callback: 'JSON_CALLBACK'
            },
        });
    };

    return discogsAPI;
});

testApp.factory("updateResults", function ($rootScope) {

    var resultsService = {};
    resultsService.data = [];

    resultsService.update = function(r) {
        // console.log("service:",r);
        this.data = r;
        $rootScope.$broadcast("update");
    };

    return resultsService;
});

testApp.factory("swingPlugin", function () {
    var plugin = {};
    plugin.cards = [];
    plugin.stack = gajus.Swing.Stack();

    // console.log(plugin);

    $(document).on("dragstart","img",function(e) {
        e.preventDefault();
    });

    return plugin;
});

testApp.directive('swingCard', function (swingPlugin) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            // console.log(element,swingPlugin.stack);
            swingPlugin.stack.createCard(element[0]);
        }
    }
});

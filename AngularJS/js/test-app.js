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

testApp.controller('ResultsController', function ($scope, $filter, updateResults, swingPlugin) {
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

    $scope.undo = function() {
        // console.log(swingPlugin.lastThrow);
        // swingPlugin.stack.getCard(swingPlugin.lastThrow).throwIn(100,100);
        var len = swingPlugin.thrown.length;
        if (len > 0) {
            var obj = swingPlugin.thrown.pop();
            var el = obj.el;
            var dir;
            obj.dir == 1 ? dir = 100 : dir = -100;
            var card = swingPlugin.stack.getCard(el);
            console.log(el.getAttribute.style);
            swingPlugin.stack.getCard(el)._trigger('_panstart');
            swingPlugin.stack.getCard(el).throwIn(dir,0);
        }
    }
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
    plugin.lastThrow = null;
    plugin.thrown = [];

    plugin.stack.on('dragstart',function() {
        console.log("card pickup");
    });
    plugin.stack.on('dragmove',function(e) {
        // console.log(e);
        //
        if (e.throwDirection == 1 && !angular.element(e.target).hasClass("select")) {
            angular.element(e.target).removeClass("reject")
            angular.element(e.target).addClass("select");
        } else if (e.throwDirection == -1 && !angular.element(e.target).hasClass("reject")) {
            angular.element(e.target).removeClass("select")
            angular.element(e.target).addClass("reject");
        }
    });
    plugin.stack.on('dragend',function(e) {
        //
    })
    plugin.stack.on('throwout',function(e) {
        console.log("throw ouuut");
        plugin.lastThrow = e.target;
        plugin.thrown.push({el:e.target,dir:e.throwDirection});
    });
    plugin.stack.on('throwin',function(e) {
        console.log("throw in");
        angular.element(e.target).removeClass("reject").removeClass("select");
    });
    plugin.stack.on('throwinend',function(e) {
        console.log("throw in end");
    });

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

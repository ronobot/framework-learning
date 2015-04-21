angular.module('starter.directives', [])

.factory("swingPlugin", function () {
    var plugin = {};
    plugin.cards = [];
    plugin.config = {
        throwOutConfidence: function (offset, element) {
            return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 1);
        }
    };

    plugin.stack = gajus.Swing.Stack(plugin.config);

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

    /*
    $(document).on("dragstart","img",function(e) {
        e.preventDefault();
    });
    */

    return plugin;
})

.directive('swingCard', function (swingPlugin) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            // console.log(element,swingPlugin.stack);
            swingPlugin.stack.createCard(element[0]);
        }
    }
});
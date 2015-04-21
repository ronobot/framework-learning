angular.module('starter.plugins', [])

.factory("swingPlugin", function () {
    var plugin = {};
    plugin.cards = [];
    plugin.stack = gajus.Swing.Stack();

    // console.log(plugin);

    $(document).on("dragstart","img",function(e) {
        e.preventDefault();
    });

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
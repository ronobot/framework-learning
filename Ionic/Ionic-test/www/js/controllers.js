angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, swingPlugin) {

  // $scope.cards = window.demolitionPlot;
  $scope.cards = window.photos;

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
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('SettingsCtrl', function($scope) {
  $scope.theSettings = {
    enableFriends: true
  };
});

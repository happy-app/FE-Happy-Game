let GameController = function ($scope) {

  var i;
  $scope.itemsList = {
    items1: []
  };

  for (i = 0; i <= 8; i += 1) {
    $scope.itemsList.items1.push({'Id': i, 'Label': 'Item ' + i});
  }

  $scope.sortableOptions = {
    containment: '#sortable-container',
    //restrict move across columns. move only within column.
    accept: function (sourceItemHandleScope, destSortableScope) {
      return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
    }
  };
};

GameController.$inject = ['$scope'];

export default GameController;

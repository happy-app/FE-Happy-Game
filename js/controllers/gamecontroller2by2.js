import shuffleArray from 'shuffle-array';

let GameController2by2 = function ($scope, GameService) {
  //  Grabbing and sending Image
  // let addImage = function (obj, img){
  //
  //
	// 			HAPP.config.headers['Content-Type'] =  undefined;
  //
	// 				var formData = new FormData();
	// 				formData.append('property[profile]', img);
  //
	// 				$http({
	// 					headers: heroku.config.headers,
	// 					url: HAPP.URL + 'puzzles'
	// 					method: 'POST',
	// 					data: formData
	// 				});
	// 		};
  //  Adding LeaderBoard
  GameService.getLeaders().then( (res) => {
    $scope.leaders = res.data.stats;
  });


  var i;
  $scope.itemsList = {
    items1: []
  };

  document.querySelector("#uploadCustomImage").addEventListener("change", function () {
      if (!this.value || !this.files || !this.files[0]) { return; }
      var reader = new FileReader();

      // image loaded
      reader.onload = function(event) {
        var dataUri = reader.result;
        var elms = document.querySelectorAll("[data-id]");

        for (var i = 0; i <  elms.length; ++i) {
          elms[i].style.backgroundImage = "url("  +  dataUri +  ")";
        }
      };

      // error
      reader.onerror = function(event) {
           alert("Failed to upload the image.");
      };

      // data://......long string....
    reader.readAsDataURL(this.files[0]);
  });

  // 1. Fetch the image
  // 2. Split it
  // 3. Randomize
  // 4. Let the user solve the game
  //   afterdrag:  Check the state
  //          --->  Show the winner

  function checkGameOver () {
    var elms = document.querySelectorAll("[data-id]");

    // data-id=1
    // data-id=2
    // data-id=3
    // data-id=4



    for (var i = 1; i <  elms.length; ++i) {
      if (parseInt(elms[i].getAttribute("data-id")) < parseInt(elms[i - 1].getAttribute("data-id"))) {
        return;
      }
    }

    alert("You are the best!");
  }

  for (i = 0; i <= 3; i += 1) {
    $scope.itemsList.items1.push({ Id: 'twoppiece'+i, _id:  i });
  }

  $scope.sortableOptions = {
    containment: '#sortable-container2by2',
    dragEnd:  checkGameOver,
    //restrict move across columns. move only within column.
    accept: function (sourceItemHandleScope, destSortableScope) {
      console.log("accept", new Date());
      return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
    }
  };

  shuffleArray($scope.itemsList.items1);
};

GameController2by2.$inject = ['$scope', 'GameService'];

export default GameController2by2;

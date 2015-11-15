let GameService = function ($http, HAPP) {

  let url = HAPP.URL + '/games'

  let checkAuth = function () {
      return true;
    };
  //  Getting LeaderBoard
  this.getLeaders = function () {
    if(checkAuth()){
      return $http({
        url: url,
        method: 'GET',
        cache: true
      });
    }
  };

  
};

GameService.$inject = ['$http', 'HAPP'];

export default GameService;

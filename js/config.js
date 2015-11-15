let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'GameController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.game', {
      url: '/game',
      controller: 'GameController',
      templateUrl: 'templates/gameplay.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default config;

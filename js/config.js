let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider
    
    .state('home', {
      url: '/',
      // controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.game2', {
      url: '/2by2',
      controller: 'GameController2by2',
      templateUrl: 'templates/gameplay2by2.tpl.html'
    })
    .state('root.game5', {
      url: '/5by5',
      controller: 'GameController5by5',
      templateUrl: 'templates/gameplay5by5.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default config;

import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-animate';
import 'angular-aria';

//  Config File
import config from './config';

//  Controller Files
import GameController from './controllers/gamecontroller';






angular
.module('app', ['ui.router', 'ngMaterial'])
.config(config)
.controller('GameController', GameController)
;

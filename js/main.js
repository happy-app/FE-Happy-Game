import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-animate';
import 'angular-aria';
import 'ng-sortable';



//  Config File
import config from './config';

//  Controller Files
import GameController2by2 from './controllers/gamecontroller2by2';
import GameController5by5 from './controllers/gamecontroller5by5';




angular
.module('app', ['ui.router', 'ngMaterial', 'as.sortable'])
.config(config)
.controller('GameController2by2', GameController2by2)
.controller('GameController5by5', GameController5by5)
;

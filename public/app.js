"use strict";
var services = angular.module('services', []);
var directives = angular.module('directives', []);

var app = angular.module('angularApp', ['ngRoute', 'controllers', 'services']);

var port = window.location.port;
services.constant('api', 'http://' + window.location.hostname + (port == '' ? '' : ':' + port) + '/service');

var controllers = angular.module('controllers', ['services', 'ui-notification']);




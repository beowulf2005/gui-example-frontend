'use strict';

(function() {

    var app = angular.module('gui.example.info');

    app.run(function($rootScope, $document){
        $document.on('click', function(e){
            if($(e.target).parents('.info').size()==0){
                $rootScope.$broadcast('info.close', e);
            }
        });
    });

    app.directive('guiInfo', function(guiInfoService) {

        function postLink($scope, $element, $attrs, $controllers){

            var icon = $element.find('.icon');
            var info = $element.find('.info-box');

            $scope.data = undefined;

            guiInfoService.getInfo($scope.key).then(function(data){
                $scope.data = data;
            });

            $scope.getInfoClass = function(){
                console.log($scope.key);
                return $scope.key[0].toUpperCase();
            };

            $scope.toggle = function(){
                icon.toggleClass('ani-flip');
                info.toggle();
            }

            $scope.$on('info.close', function(e, origin){
                icon.removeClass('ani-flip');
                info.hide();
            });
        }

        return {
            restrict : 'EA',
            scope:{
                key : "@",
            },
            link : postLink,
            templateUrl : 'app/components/info/info.html',
        };
    });



})();

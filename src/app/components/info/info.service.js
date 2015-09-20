'use strict';

(function () {

  var app = angular.module('gui.example.info');

  app.service('guiInfoService', service);

  function service($q) {

      var infos = {
        'c':[{
          name : 'name',
          label : 'name',
          value :  'Cheers',
        },{
            name : 'description',
            label : 'description',
            value :  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        }],

        'h':[{
          name : 'name',
          label : 'name',
          value :  'Happy',
        },{
          name : 'description',
          label : 'description',
          value :  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
        }],

        'i':[{
          name : 'name',
          label : 'name',
          value :  'Impressive',
        },{
          name : 'description',
          label : 'description',
          value :  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore',
        }],

        'n':[{
          name : 'name',
          label : 'name',
          value :  'Nice',
        },{
          name : 'description',
          label : 'description',
          value :  'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem',
        }],

        'a':[{
          name : 'name',
          label : 'name',
          value :  'Awesome',
        },{
          name : 'description',
          label : 'description',
          value :  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
        }],
      }

      this.getInfo = function(key) {
          return $q.resolve(infos[key]);
      }
  }
})();

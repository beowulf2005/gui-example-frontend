(function() {
  'use strict';

  angular
    .module('guiExampleFrontend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

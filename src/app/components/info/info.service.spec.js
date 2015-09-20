(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('guiExampleFrontend'));

    it('should define info data for 5 chars', inject(function(guiInfoService, $rootScope) {
      guiInfoService.getInfo('c').then(function(data){
        expect(data).toBeTruthy();
      });
      guiInfoService.getInfo('h').then(function(data){
        expect(data).toBeTruthy();
      });
      guiInfoService.getInfo('i').then(function(data){
        expect(data).toBeTruthy();
      });
      guiInfoService.getInfo('n').then(function(data){
        expect(data).toBeTruthy();
      });
      guiInfoService.getInfo('a').then(function(data){
        expect(data).toBeTruthy();
      });
    }));
  });
})();

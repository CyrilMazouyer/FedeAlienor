'use strict';

// Directive pour la fin du chargement du ng-repeat du slideshow
app.directive('onFinishRenderSlideshow', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatSlideshowFinished');
                });
            }
        }
    };
});

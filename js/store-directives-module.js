/**
 * Created by ET on 3/21/2016.
 */
(function(){
    var app = angular.module('store-directives', [])

    //Product-tabs directive which includes a controller with alias panel
    app.directive("productTabs", function(){
        return {
            restrict: 'E',
            templateUrl: 'directives/product-tabs.html',
            controller: function(){
                this.tab = 1;
                this.setTab = function(setTab){
                    this.tab = setTab;
                };
                this.isSet = function(isSet){
                    return this.tab === isSet;
                };
            },
            controllerAs: 'panel'
        };
    });

    //Product-gallery directive which includes a controller with alias gallery
    app.directive("productGallery", function(){
        return {
            restrict: 'E',
            templateUrl: 'directives/product-gallery.html',
            controller: function(){
                this.current = 0;
                this.setCurrent = function(setCurrent){
                    if(setCurrent === null){
                        this.current = 0;
                    }else{
                        this.current = setCurrent;
                    }
                };
            },
            controllerAs: 'gallery'
        };
    });

    //Tabs directive
    app.directive("tabNav", function(){
        return {
            restrict: 'E',
            templateUrl: 'directives/tab-nav.html'
        };
    });

    //Product-Title directive
    app.directive("productTitle", function(){
        return {
            restrict: 'E',
            templateUrl: 'directives/product-title.html'
        };
    });

    //Product-Description directives
    app.directive("productDescription", function(){
        return {
            restrict: 'E',
            templateUrl: 'directives/product-description.html'
        } ;
    });

})();
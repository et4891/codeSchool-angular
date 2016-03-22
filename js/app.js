/**
 * Created by ET on 2016-03-20.
 */
(function(){
     //Create a Module named gemStore so we can get started on this marketing journey
    //Attach the gemStore module to our HTML page with a Directive
    var app = angular.module("gemStore", ['store-directives']);

    //Storing data inside the controller
    app.controller('StoreController', ['$http', function($http){
        var store = this;
        store.products = [];
        $http.get('store-products.json').success(function(data){
            store.products = data;
        });
    }]);

    //Controller for the tab panel //removed and inserted into directives for refactoring purpose
    // app.controller("TabController", function(){
    //    this.tab = 1;
    //    this.setTab = function(setTab){
    //        this.tab = setTab;
    //    };
    //    this.isSet = function(isSet){
    //        return this.tab === isSet;
    //    };
    // });

    //Controller for Gallery  //removed and inserted into directives for refactoring purpose
    // app.controller("GalleryController", function(){
    //    this.current = 0;
    //    this.setCurrent = function(setCurrent){
    //        if(setCurrent === null){
    //            this.current = 0;
    //        }else{
    //            this.current = setCurrent;
    //        }
    //    };
    // });

    //Review Form Controller
    app.controller("ReviewController", function(){
       // initial review as empty object
       this.review = {};
       this.addReview = function(product){
           this.review.createdOn = Date.now();
           product.reviews.push(this.review);
           this.review = {};
       };
    });
    
    


})();
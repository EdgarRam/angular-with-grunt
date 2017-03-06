(() => {


    angular.module( 'myApp.controllers', [] );
    angular.module( 'myApp.services', [] );


    angular.module( 'myApp',  [
        'myApp.controllers',
        'myApp.services',
        'ui.router',
    ] )
    

})()

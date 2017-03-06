( () => {

    const RouteConfig = ( $stateProvider, $urlRouterProvider ) => {


        $urlRouterProvider.otherwise( '/start' )


        $stateProvider
            .state( 'start', {
                url: '/start',
                template: '<h3>hola</h3>'
            } )

    }


    angular.module( 'myApp' )
    .config( RouteConfig )



} )()

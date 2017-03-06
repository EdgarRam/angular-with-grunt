( () => {

    const RouteConfig = ( $stateProvider, $urlRouterProvider, ConfigUrlsMin ) => {

        let urlsScripts = ConfigUrlsMin;

        $urlRouterProvider.otherwise( '/start' )


        $stateProvider
            .state( 'start', {
                url: '/start',
                template: '<h3>hola</h3>',
                resolve : {
                    'login' : function( $ocLazyLoad ) {
                        return $ocLazyLoad.load( [
                            // filters
                            urlsScripts.filters,

                            // services
                            urlsScripts.services,

                            // controllers
                            urlsScripts.modalsCtrl
                        ] );
                    }
                }
            } )

    }


    angular.module( 'myApp' )
    .config( RouteConfig )



} )()

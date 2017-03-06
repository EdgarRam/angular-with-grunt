( () => {


    const configUrlsMin  = ( ) =>{
        var isMinified = false;
        let jsFileExtension = ( isMinified ) ? '.min.js' : ".js";

        return {
            "filters": "/concat-scripts/scripts/filters-all" + jsFileExtension,
            "services": "/concat-scripts/scripts/services-all" + jsFileExtension,
            "modalsCtrl": "/concat-scripts/scripts/modalsCtrl-all" + jsFileExtension,
        };

    }


    angular.module( 'myApp.services' )
    .constant( 'ConfigUrlsMin', configUrlsMin() );
})()

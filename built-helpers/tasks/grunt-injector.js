module.exports = ( _grunt ) => {


    var api = {
        name: 'injector',
        config: {}
    }


    api.config.options = {
        destFile : _grunt.appconf.dirs.dev + '/index.html',
        // ignorePath: 'build/',
        relative: '/'
    }


    api.config.local_dependencies = {
        files :{
            'index.html': _grunt.appconf.dirs.dev + '/scripts/**/*.js'
        }
    }

    return api
}

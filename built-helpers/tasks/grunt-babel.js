module.exports = ( _grunt ) => {


    var api = {
        name: 'babel',
        config: {}
    }


    api.config.options = {
        sourceMap: false,
        presets: [ 'es2015' ]
    }


    api.config.files = {
        expand: true,
        cwd: _grunt.appconf.dirs.apps + '/scripts',
        src: [
            '**/*.js',
            '!**/*.min.js'
        ],
        dest: _grunt.appconf.dirs.dev + '/scripts',
    }

    return api
}

module.exports = ( _grunt ) => {


    var api = {
        name: 'watch',
        config: {}
    }


    api.config.options = {
        livereload: true,
        event: ['added', 'deleted', 'changed'],
    }

    // scripts
    api.config[ 'scripts' ] = {
        files: [ _grunt.appconf.dirs.apps + '/scripts/**/*.js' ],
        tasks: [ 'babel' ]
    }


    // styles
    api.config[ 'styles' ] = {
        files: [ _grunt.appconf.dirs.apps + '/styles/**/*.styl' ],
        tasks: [ 'stylus', ]
        // 'postcss:' + _app + '-styles'
    }


    // views
    api.config[ 'views' ] = {
        files: [ _grunt.appconf.dirs.apps + '/views/**/*.pug' ],
        tasks: [ 'pug' ]
    }

    //index
    api.config[ 'index' ] = {
        files: [ _grunt.appconf.dirs.apps + '/index.pug' ],
        tasks: [ 'pug:index' ]
    }


    return api
}

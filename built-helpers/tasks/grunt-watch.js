module.exports = ( _grunt ) => {


    var api = {
        name: 'watch',
        config: {}
    }


    api.config.options = {
        livereload: true
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
    api.config[ '-views' ] = {
        files: [ _grunt.appconf.dirs.apps + '/views/**/*.pug' ],
        tasks: [ 'pug' ]
    }


    return api
}

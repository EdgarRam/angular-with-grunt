module.exports = ( _grunt ) => {


    var api = {
        name: 'stylus',
        config: {}
    }


    api.config.compile = {
        files: [ {
            expand: true,
            cwd: _grunt.appconf.dirs.apps + '/styles',
            src: [
                '**/*.styl',
                '!**/_*.styl'
            ],
            dest: _grunt.appconf.dirs.dev + '/styles',
            ext: '.css'
        } ]
    }


    return api
}

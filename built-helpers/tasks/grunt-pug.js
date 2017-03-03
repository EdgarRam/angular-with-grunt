module.exports = ( _grunt ) => {


    var api = {
        name: 'pug',
        config: {}
    }


    api.config.options = {
        pretty: true
    }


    api.config.files = {
        expand: true,
        cwd: _grunt.appconf.dirs.apps + '/views',
        src: [
            '**/*.pug',
            '!**/layouts/**',
            '!**/mixins/**',
            '!**/includes/**',
        ],
        dest: _grunt.appconf.dirs.dev + '/views',
        ext: '.html',
    }

    return api
}

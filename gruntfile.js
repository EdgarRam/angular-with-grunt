module.exports = function(grunt) {


    grunt.appconf = grunt.file.readJSON( './app-conf.json' )

    require('load-grunt-tasks')(grunt);

    require( './built-helpers/config' )( grunt, './tasks' )

};

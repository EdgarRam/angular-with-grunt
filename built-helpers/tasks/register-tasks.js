module.exports = ( _grunt ) => {


    _grunt.registerTask( 'default', () => {
        console.log('')
        console.log('')
        console.log( '          wTF, que quieres hacer con grunt en default !!!'.bold.red )
        console.log('')
    } );


    _grunt.registerTask( 'dev', [
        'clean',
        'copy',
        'stylus',
        // 'postcss',
        'babel',
        'pug',
        'connect',
        'watch',
    ] );



}

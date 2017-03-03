module.exports = ( _grunt, folder ) => {


    const grunt_init_config = {}

    const path = require('path')
    const fs = require('fs')

    const PATH = path.join( __dirname, folder )
    const FILES = fs.readdirSync(PATH)

    FILES.forEach((file) => {
        if( `${file}`.search(".js") > -1 ){
            var task = require( `${PATH}/${file}`)( _grunt )
            if( task ){
                grunt_init_config[task.name] = task.config
            }
        }
    })

    _grunt.initConfig( grunt_init_config )
}

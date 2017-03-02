

module.exports = ( _grunt, folder ) => {

    const path = require('path')
    const fs = require('fs')

    const PATH = path.join( __dirname, folder )
    const FILES = fs.readdirSync(PATH)
    
    FILES.forEach((file) => {
        if( `${file}`.search(".js") > -1 ){
            require( `${PATH}/${file}`)(_grunt)
        }
    });
}

const multer = require('multer')
const path = require('path')

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'images'),
        filename: function (req, file, calb) {
            calb(null, file.originalname)
        }
    })
}
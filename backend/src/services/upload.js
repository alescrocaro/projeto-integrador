const multer =  require('multer');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');

const multerConfig = {
    storage: multer.diskStorage({
        destination: (_, __, cb) => {
            const folderPath = path.resolve(__dirname, '..','..','uploads', 'images')
            fs.mkdirSync(folderPath , { recursive: true })
            cb(null, folderPath)
        },
        filename: (_, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err);
                const fileName =  `${hash.toString('hex')}-${file.originalname}`;
                cb(null, fileName);
            })
        }
    }),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },

}

module.exports = multer(multerConfig).array('specieImages',3)
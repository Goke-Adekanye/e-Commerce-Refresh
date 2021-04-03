const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:|\./g,'-').slice(0, 19) + '-' + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/webp'){
        cb(null, true);
    } else {
        cb(new Error('wrong image type'), false);
    }
    
    
}

const upload = multer({
    storage: storage,
    limits:{
        // accept only 5mb
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter


});


module.exports = upload;
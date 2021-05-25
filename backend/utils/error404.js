const error404 = (req,res) => {
    const path = require('path');
    const parent = path.normalize(__dirname + '/..');
    const fullPath = path.join(parent,'public/error.html');
    res.status(404).sendFile(fullPath);
}

module.exports = error404;
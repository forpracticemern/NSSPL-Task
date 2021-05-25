const jwt = require('jsonwebtoken');
const tokenOperations = {
    secret:'thisisthesecretkey',
    createToken(email){
        let tokenId = jwt.sign({'userid':email},this.secret,{expiresIn:'1h'});
        return tokenId;
    },
    verifyToken(tokenId){
        let decode = jwt.verify(tokenId, this.secret);
        if(decode && decode.userid){
                return true;
        }
        return false;
    }
}
module.exports = tokenOperations;
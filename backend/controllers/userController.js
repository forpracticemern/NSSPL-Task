const userOperation = require("../services/userCRUD");
const User = require("../dto/user");
const bcrypt = require('bcrypt');

const userController = {
  async login(req, res) {
    
    try {
      let { username, password } = req.body;
      let user = await userOperation.search(username);
      
      if (user){
        let bool = bcrypt.compareSync(password, user.password); 
        if(bool == true){
          const token = require('../utils/token');
          let tokenId = token.createToken(user.email);
            
          return res.json({ 
            status: 200, 
            message : "LogIn Successfully", 
            userinfo : user, 
            tokenid : tokenId 
          });
        }
      }
      return res.json({ status: 401, message: "Invalid Username or Password" });
    } 
    catch (err) {
      return res.json({ status: 503, err: err });
    }
  },

  async register(req, res) {
    
    try {
      let { firstname, lastname, username, password, email } = req.body;
      
      let user = await userOperation.search( username );
      
      if (user) {    
        return res.json({ status: 409, message: "Username Already Exists" });
      }
      let salt = bcrypt.genSaltSync(3);
      let hash = bcrypt.hashSync(password,salt);
      const userObject = new User(firstname, lastname, username, hash, email);
      await userOperation.add(userObject);
      return res.json({ status: 200, message: "User Registered Succesfully" });

    } catch (err) {
      return res.json({ status: 503, err: err });
    }
  },

};

module.exports = userController;
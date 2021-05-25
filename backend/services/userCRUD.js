const UserModel = require("../db/models/userSchema");

const userCRUD = {
  add(userObject) {
    return UserModel.create(userObject);
  },
  search(username) {
    return UserModel.findOne({username});
  },
  update(user) {
    return UserModel.findOneAndUpdate({username : user.username},{$set : {user}})
  },
  delete(employee_id) {
    return UserModel.findByIdAndRemove({_id: employee_id});
  },
};

module.exports = userCRUD;
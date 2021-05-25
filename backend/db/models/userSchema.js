const connection = require("../connection");
const Schema = connection.Schema;
const config = require('../../utils/config');

const UserSchema = new Schema({
    firstname:{ type: String, required: true },
    lastnanme:{ type: String, required: true },
    username: { type: String, required: true, unique: true, min: 3, max: 25 },
    password: { type: String, required: true, min: 8, max: 25 },
    email: { type: String, required: true, unique: true },
    token: {type : String},
  },
  { timestamps: true });

const UserModel = connection.model( config.userCollection, UserSchema);

module.exports = UserModel;
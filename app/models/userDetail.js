/**
 * Created by Flashbox on 7/27/2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    userId: String,
    fullName: String,
    profilePic: String,
    joinDate: Date,
    JoiningBy: String,
    facebookDetail: {
        userName: String,
        profilePic: String
    },
    twitterDetail: {
        userName: String,
        profilePic: String
    },
    deviceDetail: {
        deviceType: String,
        deviceToken: String
    }

});

mongoose.model('userDetail', userSchema);


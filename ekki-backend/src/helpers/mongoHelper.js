const ObjectId = require('mongoose').Types.ObjectId;

exports = function arrayToObjectId(arrayStr){
    return arrayStr.map( item => ObjectId(item) );
};
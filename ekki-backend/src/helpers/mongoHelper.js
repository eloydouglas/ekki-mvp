const ObjectId = require('mongoose').Types.ObjectId;

module.exports = function arrayToObjectId(arrayStr){
    return arrayStr.map( item => ObjectId(item) );
};
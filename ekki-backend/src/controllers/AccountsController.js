const Account = require('../models/Account');
const ObjectId = require('mongoose').Types.ObjectId;

exports.show = (req, res) => {
    if(!req.params.user_id) return res.status(400).send();

    Account.findOne({ user_id: ObjectId(req.params.user_id) } , (err, account) => {
        if (err) return res.json({ error: err });
        res.status(200).send(account);
    });
};

exports.update = (req, res) => {

};
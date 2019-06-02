const Account = require('../models/Account');

exports.show = (req, res) => {
    if(!req.params.user_id) return res.status(400).send();
    
    Account.find({ user_id: req.params.user_id } , (err, account) => {
        if (err) return res.json({ error: err });
        res.status(200).send(account);
    });
};

exports.update = (req, res) => {

};
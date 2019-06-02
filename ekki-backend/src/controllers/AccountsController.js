const Account = require('../models/Account');

exports.show = (req, res) => {
    if(!req.params.user_id) return res.status(400).send();
    
    User.find({ user_id: req.params.user_id } , (err, user) => {
        if (err) return res.json({ error: err });
        res.status(200).send({ user });
    });
};

exports.update = (req, res) => {

};
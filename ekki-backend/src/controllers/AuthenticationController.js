const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.create = (req, res) => {
    if(!req.body.id) return res.status(400).send();
    
    User.findById(req.body.id, (err, user) => {
        if (err || !user) return res.status(404).json({ error: "User not found" });
        
        const token = jwt.sign({userId: user._id}, process.env.KEY);

        res.status(200).send({
            token
        });
    });
}
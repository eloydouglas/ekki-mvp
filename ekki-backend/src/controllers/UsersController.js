const User = require('../models/User');

exports.index = (req, res) => {
    
    User.find((err, users) => {
        if (err) return res.json({ error: err });
        res.status(200).send({ users });
    });
};

exports.show = (req, res) => {

    if(!req.params.id) return res.status(400).send();
    
    User.findById(req.params.id, (err, user) => {
        if (err) return res.json({ error: err });
        res.status(200).send({ user });
    });
};

exports.create = (req, res) => {
    const {name, phone, cpf } = req.body;

	const user = new User({
        name,
        phone,
        cpf
    });
    
    user.save((err, newUser) => {
        if (err) return res.json({ error: err });
        res.status(201).send({ newUser });
    });
};

exports.delete = (req, res) => {

    if(!req.params.id) return res.status(400).send();

    User.findById(req.params.id, (err, user) => {

        if (err) return res.json({ error: err });

        user.remove(() => {
            if (err) return res.json({ error: err });
            res.status(204).send();
        });
    });
};

exports.update = (req, res) => {

    if(!req.params.id) return res.status(400).send();

    User.findById(req.params.id, (err, user) => {
        if (err) return res.json({ error: err });

        user.name = req.body.name || user.name;
        user.cpf = req.body.cpf || user.cpf;
        user.phone = req.body.phone || user.phone;
        
        user.save((err, updatedUser) => {

            if (err) return res.json({ error: err });

            res.send({ data: updatedUser });
        });
    });
};



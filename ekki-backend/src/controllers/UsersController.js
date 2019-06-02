const User = require('../models/User');
const Account = require('../models/Account');
const Sequential = require('../models/Sequential');

const ObjectId = require('mongoose').Types.ObjectId;

exports.index = (req, res) => {
    let contacts;

    try{
        contacts = JSON.parse(req.query.contacts);
    }catch(e){
        res.status(400).send();
    };
    
    if(contacts && contacts.length > 0){

        console.log('here')
        User.find({_id: { $in: toObjectId(contacts) } },(err, users) => {
            if (err) return res.json({ error: err });
            res.status(200).send({ users });
        });
    }else{
        User.find((err, users) => {
            if (err) return res.json({ error: err });
            res.status(200).send({ users });
        });
    }    
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

        createAccount(newUser._id)
        .then(success => res.status(201).send({ newUser }))
        .catch(error => res.json({ error }))
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

//Privates

async function createAccount(user_id){

    const seq = await Sequential.findOneAndUpdate({ collectionName: "accounts" },
                                                  { $inc: { sequential: + 1 } },
                                                  (res) => res);

    const account = new Account({
        user_id,
        number: seq.sequential,
        balance: 1000,
        limit: 500,
    });

    return await account.save();
}

//Refactor later

function toObjectId(arrayStr){
    return arrayStr.map( item => ObjectId(item) );
};
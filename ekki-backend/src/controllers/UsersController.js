const User = require('../models/User');
const Account = require('../models/Account');
const Sequential = require('../models/Sequential');

const arrayToObjectId = require('../helpers/mongoHelper');

exports.index = (req, res) => {
    let contacts;
    try{
        contacts = JSON.parse(req.query.contacts);
        if(contacts.length == 0) return res.status(200).send([]);
    
        if(contacts){
            User.find({_id: { $in: arrayToObjectId(contacts) } },(err, users) => {
                if (err) return res.json({ error: err });
                res.status(200).send(users);
            });
        }else{
            User.find((err, users) => {
                if (err) return res.json({ error: err });
                res.status(200).send(users);
            });
        }
    
    }catch(e){
        res.status(400).send({ error: e });
    };
};

exports.show = (req, res) => {

    if(!req.params.id) return res.status(400).send();
    
    User.findById(req.params.id, (err, user) => {
        if (err) return res.json({ error: err });
        res.status(200).send(user);
    });
};

exports.create = (req, res) => {
    const {name, phone, cpf} = req.body;
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
        user.contacts = req.body.contacts || user.contacts;
        
        user.save((err, updatedUser) => {

            if (err) return res.json({ error: err });
            res.status(200).send(updatedUser);
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
        balance: 0,
        limit: 500,
    });

    return await account.save();
}
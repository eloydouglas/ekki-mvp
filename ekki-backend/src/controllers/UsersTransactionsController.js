const UserTransaction = require('../models/UserTransaction');
const Account = require('../models/Account');
const User = require('../models/User');
const ObjectId = require('mongoose').Types.ObjectId;

exports.index = (req, res) => {
    if(!req.params.id) return res.status(400).send("User Id Expected");

    try{
        const query = {$or: [{sender_id: ObjectId(req.params.id)}, {receiver_id: ObjectId(req.params.id)}]}
    
        UserTransaction.find(query, (err, transactions) => {
            if (err) return res.status(400).json({ error: err.message });
            res.status(200).send(transactions);
        });   
    }catch(error){
        res.status(400).json({ error: error.message });
    }
};

exports.create = (req, res) => {
    const {sender_id, receiver_id, ammount} = req.body;

    updateAccounts({sender_id, receiver_id, ammount})
    .then(success => {
        const userTransacttion = new UserTransaction({
            sender_id,
            receiver_id,
            ammount,
            sender_name: success.sender.name,
            receiver_name: success.receiver.name
        });

        userTransacttion.save((err, newTransaction) => {
            if (err) return res.status(400).json({ error: err });
            res.status(201).send({ newTransaction });
        });
    })
    .catch(error => res.status(401).json({ error: error.message }));
};

//Privates

async function updateAccounts(newTransaction){

    let senderAccount;
    let receiverAccount;
    try{
        const findSenderAcc = () => new Promise((resolve, reject)=>{
            Account.findOne({ user_id: ObjectId(newTransaction.sender_id) } , (err, account) => {
                if (err) return reject(err);
                resolve(account);
            });
        });
    
        const findReceiverAcc = () => new Promise((resolve, reject)=>{
            Account.findOne({ user_id: ObjectId(newTransaction.receiver_id) } , (err, account) => {
                if (err) return reject(err);
                resolve(account);
            });
        });

        senderAccount = await findSenderAcc(),
        receiverAccount = await findReceiverAcc()
    
        if(newTransaction.ammount > 0 && (newTransaction.ammount <= Number(senderAccount.balance) + Number(senderAccount.limit))){
            senderAccount.balance -= newTransaction.ammount;
            receiverAccount.balance += Number(newTransaction.ammount);

            const saveSender = () => new Promise((resolve, reject)=> {
                senderAccount.save((err, savedAccount) => {
                    if (err) return reject(err);
                    resolve(savedAccount);
                });
            });
        
            const saveReceiver = () => new Promise((resolve, reject)=> {
                receiverAccount.save((err, savedAccount) => {
                    if (err) return reject(err);
                    resolve(savedAccount);
                });
            });

            let response = {
                sender: await saveSender(),
                receiver: await saveReceiver()
            }

            const findSender = () => new Promise((resolve, reject)=>{
                User.findById(ObjectId(response.sender.user_id), (err, user) => {
                    if (err) return reject(err);
                    resolve(user);
                });
            });
        
            const findReceiver = () => new Promise((resolve, reject)=>{
                User.findById(ObjectId(response.receiver.user_id), (err, user) => {
                    if (err) return reject(err);
                    resolve(user);
                });
            });


            return response = {
                sender: await findSender(),
                receiver: await findReceiver()
            };
        }else{
            throw new Error("Transfer not allowed");
        }
    }catch(error){
        throw error;
    };
};
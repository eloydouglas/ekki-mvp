const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    try{
        if(req.path === '/auth/signin') return next();

        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.KEY, (err, payload)=>{
            if(err){
                res.status(401).send({ error: "Invalid token" });
            }
            else{
                next();
            }
        });

    }catch(err){
        res.status(403).send({error: "No token found in request headers"});
    }
}
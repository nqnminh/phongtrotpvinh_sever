const jwt = require('jsonwebtoken');

module.exports.verifyToken=function(req, res, next){
    console.log("AAA", req.headers.authorrization);
    const token = req.headers.authorization.split(' ')[1];
    
    if(!token) return res.status(401).send('Access Denied');

    try {
        const verified=jwt.verify(token, process.env.TOKEN_SERRET);
        req.user= verified;
        next();
    }
    catch(err){
        res.status(400).send('Invalid Token')
    }
}
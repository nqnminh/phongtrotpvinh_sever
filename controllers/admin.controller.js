const Admin =require('../models/admin.model');

module.exports.get=async (req,res)=>{
    const admins= await Admin.find();
    res.json(admins);

}
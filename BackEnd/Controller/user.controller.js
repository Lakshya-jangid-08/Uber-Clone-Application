const UserModel = require('../Model/user.models');
const userService = require('../Service/user.service');

const RegisterUser = async (req,res,next)=>{
    console.log("registeruser function callled")
    const {Username,Email,Password} = req.body;
    const hashPass = await UserModel.hashPass(Password);
    
    const first_name = Username.first_name
    const last_name = Username.last_name
    
    const user = await userService.CreateUser(
        first_name,
        last_name,
        Email,
        hashPass
    )

    const token = user.GenToken();
    res.cookie("token",token);
    
    res.status(200).json({token,user});
}

const LoginUser = async function(req,res) {
    const {Email ,Password } = req.body;

    const user = await UserModel.findOne({Email : Email}).select("Password")
    if(!user){
        return res.status(401).json({message : "Invalid User name or Password"});
    }
        
    const comparePass = await user.ComparePass(Password,user.Password);
    
    if(!comparePass) {
       return res.status(401).json({message : "Invalid User name or Password"});
    }

    const token = user.GenToken();
    res.cookie("token",token);

    return res.status(200).json({token,user})
}

const GetUserProfile = async function(req,res,next){
    res.send(200).json(req.user)
}


module.exports = {
    RegisterUser,
    LoginUser,
    GetUserProfile
}
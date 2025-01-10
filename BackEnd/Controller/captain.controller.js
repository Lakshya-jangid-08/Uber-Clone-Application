const captainModel = require("../Model/captain.model");
const captainService = require('../Service/captain.service');
module.exports.RegisterCaptain = async function (req, res, next) {
    const { Captainname, Email, Password, Vehicle } = req.body;

    if (!Captainname.first_name || !Email || !Password || !Vehicle.Color || !Vehicle.Capacity || !Vehicle.VehicleType || !Vehicle.Plate) {
        throw new Error("All field required")
    }

    const hashPassword = await captainModel.hashPass(Password); 
    console.log(hashPassword);
    
    const captain = await captainService.CreateCaptain(
        Captainname,
        Email, 
        hashPassword,
        Vehicle
    )
    console.log("creaate captain");    
    console.log(captain);
    const token = captain.GenToken();
    console.log("200 send");
    
    res.status(200).json({token,captain});

}

module.exports.LoginCaptain = async function(req,res) {
    const {Email ,Password } = req.body;

    const captain = await captainModel.findOne({Email : Email}).select("Password")
    if(!captain){
        return res.status(401).json({message : "Invalid captain name or Password"});
    }
        
    const comparePass = await captain.ComparePass(Password,captain.Password);
    
    if(!comparePass) {
       return res.status(401).json({message : "Invalid captain name or Password"});
    }

    const token = captain.GenToken();
    res.cookie("token",token);
    console.log(cookies);

    return res.status(200).json({token,captain})
}
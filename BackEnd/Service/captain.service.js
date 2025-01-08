const captainModel = require("../Model/captain.model")

module.exports.CreateCaptain = async function(Captainname, Email, hashPassword, Vehicle) {
    console.log("function called")
    const newCaptain = await captainModel.create({
        Captainname : Captainname,
        Email : Email,
        Password : hashPassword,
        Vehicle : Vehicle
    })
    
    console.log("creaate captain");
    return newCaptain
}
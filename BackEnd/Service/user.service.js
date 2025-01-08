const UserModel = require('../Model/user.models');

const CreateUser = async (first_name,last_name,Email,Password)=>{
    if( !Email || !Password){
        console.log("All field must be fil");
    }
    const Username = {
        first_name : first_name,
        last_name : last_name
    }
    const user = await UserModel.create({
        Username : Username,
        Email : Email,
        Password : Password
    })

    return user;
}


module.exports = {
    CreateUser
};

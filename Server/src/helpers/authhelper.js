const bcrypt=require('bcrypt')

const hashPassword= async (password) => {
    const saltRounds = 10; // You can adjust this for security and performance
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}
 const compare=async(password,hashed)=>{
    return bcrypt.compare(password,hashed)
}

module.exports={hashPassword,compare}
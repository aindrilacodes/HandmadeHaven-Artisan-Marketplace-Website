const bcrypt=require('bcrypt')

export const hashpassword=async(password)=>{
    try{
        const saltRounds=10
        const hashed=await bcrypt.hash(password.saltRounds)
        return hashed
    }
    catch(error)
    {
        console.log(error);
        
    }
}
export const compare=async(password,hashed)=>{
    return bcrypt.compare(password,hashed)
}
// circular depandecy na ho isliye ek seperate file m jwt password kr rhe h
// ab yaha se export kr denge router-->user,admins ko aur middleware wale ko bhi
//avoid the circular dependecy

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;


module.exports ={

    JWT_ADMIN_PASSWORD,
    JWT_USER_PASSWORD
}
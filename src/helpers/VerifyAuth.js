import {Users} from '../DB/Users';

export const VerifyAuth = (user)=>{
    const search_user = Users.filter(user_filer => user_filer.email===user.email)
    if(!search_user[0] || search_user[0].password !== user.password){
        return {
            ok:false,
            user: {}
        }
    }
    return {
        ok: true,
        user: search_user
    }
}
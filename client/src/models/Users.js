import myFetch, { User } from "./myFetch";

let ob = {
    CurrentUser: null,
    async Login(email, password){
        const user = await myFetch('/users/login', { email, password });
        
        return this.CurrentUser = user;
    }
}


export default ob;
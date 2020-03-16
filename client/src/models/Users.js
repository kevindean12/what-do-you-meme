const Users = [
    {Name: 'Kevin', Password: '2020', Email: 'someone@gmail.com'},
    {Name: 'Person', Password: '2012', Email: 'person@gmail.com'}
];

let ob = {
    CurrentUser: null,
    Login(email, password){
        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Incorrect password');
    
        return this.CurrentUser = user;
    }
}


export default ob;
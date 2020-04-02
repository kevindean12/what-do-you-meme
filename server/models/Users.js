const Users = [
    {Name: 'Kevin', Password: '2020', Email: 'someone@gmail.com', userID: 0},
    {Name: 'Person', Password: '2012', Email: 'person@gmail.com', userID: 1}
];

module.exports = {
    Login(email, password){
        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Incorrect password');
    
        return user;
    }
}
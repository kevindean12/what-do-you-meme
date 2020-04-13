const Users = [
    {Name: 'Kevin', Password: '2020', Email: 'kevin@notmail.com', userID: 0},
    {Name: 'Person', Password: '2012', Email: 'person@gmail.com', userID: 1},
    { Name: 'Bernie', Password: '2020', Email: 'bernie@gmail.com', userID: 2 }
];

module.exports = {
    Login(email, password){
        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Incorrect password');
    
        return user;
    },

    GetUser: (userID) => Users[userID],
}
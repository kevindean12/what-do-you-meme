const axios = require('axios').default;
const Users = [
    {Name: 'Kevin', Password: '2020', Email: 'kevin@notmail.com', userID: 0},
    {Name: 'Person', Password: '2012', Email: 'person@gmail.com', userID: 1},
    {Name: 'Bernie', Password: '2020', Email: 'bernie@gmail.com', userID: 2}
];

function getOrCreate(response){
    console.log(response.data);
    let user = Users.find(x => x.Email == response.data.email);
    if(!user){
        Users.push({Name: response.data.name, Password: null, Email: response.data.email, userId: Users.length });
        user = Users[Users.length - 1];
    }
    return user;
}

module.exports = {
    async Login(email, password){
        let response;
        switch(email){
            case "google":
                response = await axios.get("https://www.googleapis.com/userinfo/v2/me", { headers: { Authorization: `Bearer ${password}` } })
                return getOrCreate(response);
            case "facebook":
                response = await axios.get(`https://graph.facebook.com/v3.0/me?fields=id,email,name,picture&access_token=${password}`);
                return getOrCreate(response);
            default:
                const user = Users.find(x => x.Email == email);
                if(!user) throw Error('User not found');
                if(user.Password != password) throw Error('Incorrect password');
                return user;
        }
        
    },

    GetUser: (userID) => Users[userID],
}
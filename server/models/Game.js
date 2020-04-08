const users = require("./Users");
const captionsDeck = require("./quoteCards");
const DEAL_AMOUNT = 3;
let iCurrentCaption = 0;
const Players = [
    {Name: 'Bernie', Score: 0, isDealer: true}
];

const PictureDeck = [
    'https://www.telegraph.co.uk/content/dam/news/2016/04/05/ackbar_trans_NvBQzQNjv4BquzNJMpt-xp3nPuQhFJOjaI1_Bnx9uINdC_XC5LRmTXQ.jpg?imwidth=450',
    'https://cdn.pixabay.com/photo/2017/10/05/22/16/katz-2821316_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_1280.jpg',
    
];

let CurrentPicture = "";
let iCurrentPicture = 0;

function FlipPicture(){
    return module.exports.CurrentPicture = PictureDeck[iCurrentPicture++];
}

const CardsInPlay = [];

function SubmitCaption(caption, playerID) {
    const player = Players[playerID];
    if(player.isDealer) throw Error("Dealer is not allowed to submit a caption");
    CardsInPlay.push({
        Text: caption,
        PlayerID: playerID,
        isChosen: false,
    });
}

function Join(userID){
    const user = users.GetUser(userID)
    Players.push({Name: user.Name, Score: 0, isDealer: false})
    
    const myCards = captionsDeck.list.slice(iCurrentCaption, iCurrentCaption + DEAL_AMOUNT);
    iCurrentCaption += DEAL_AMOUNT; //move current caption ahead

    return { playerID: Players.length-1, myCards};
}

module.exports = {
    Players, PictureDeck, CurrentPicture, 
    CardsInPlay: CardsInPlay,
    Join, SubmitCaption, FlipPicture
}
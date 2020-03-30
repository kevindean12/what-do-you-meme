const CurrentUser = require("./Users");

const Players = [
    {Name: 'Bernie', Score: 0, isDealer: false}
];

const PictureDeck = [
    'https://www.telegraph.co.uk/content/dam/news/2016/04/05/ackbar_trans_NvBQzQNjv4BquzNJMpt-xp3nPuQhFJOjaI1_Bnx9uINdC_XC5LRmTXQ.jpg?imwidth=450',
    'https://cdn.pixabay.com/photo/2017/10/05/22/16/katz-2821316_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_1280.jpg',
    
];

let CurrentPicture = ""; //could use int index here

const CardsInPlay = [];

function SubmitCaption(caption, playerID) {
    CardsInPlay.push({
        Text: caption,
        playerID,
        isChosen: false,
    });
}

function Init(){
    //TODO this doesn't make sense on the server anymore
    Players.push({Name: Users.CurrentUser.Name, Score: 0, isDealer: true})
    MyCards.push(CaptionsDeck[0]);
    MyCards.push(CaptionsDeck[1]);

    CurrentPicture = PictureDeck[0];
}

module.exports = {
    Players, PictureDeck, CurrentPicture, 
    CardsInPlay,
    Init, SubmitCaption
}
import {CurrentUser}from "./Users";
import myFetch from "./myFetch";

let interval; //reference to timer that pings server to check for changes

export default {
    State: {},
    MyCards: [],
    Init(){
        if(this.MyCards.length){
            //player has already joined but navigated away - don't restart them
            return;
        }
        myFetch('/game/join', {})
            .then(x=> { 
                this.MyCards = x.myCards;
                console.log(x);
            })
            .catch(err => console.warn(err));
    },
    Run(){
        myFetch('/game')
            .then(x=> { 
                this.State = x;
                console.log(x);
            });
    },
    Start(){
        interval = setInterval(() => this.Run(), 2000);
    },
    Pause(){
        clearInterval(interval);
    }

}
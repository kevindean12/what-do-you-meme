import {CurrentUser}from "./Users";
import myFetch from "./myFetch";



export let CurrentPicture = ""; //could use int index here
let interval; //reference to timer that pings server to check for changes



export default {
    State = {},
    MyCards = [],
    Init(){
        myFetch('/game/join', {})
            .then(x=> { 
                MyCards = x;
                console.log(x);
            })
            .catch(err => console.warn(err));
    },
    Run(){
        myFetch('/game')
            .then(x=> { 
                State = x;
                console.log(x);
            });
    },
    Start(){
        interval = setInterval(Run, 2000);
        //aka:
        //interval = setInterval(() => Run(), 2000);
    },
    Pause(){
        clearInterval(interval);
    }

}
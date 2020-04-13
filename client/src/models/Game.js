import {CurrentUser}from "./Users";
import myFetch from "./myFetch";

export let State = {};
export let MyCards = [];

export let CurrentPicture = ""; //could use int index here

export function Init(){
    myFetch('/game')
        .then(x=> { 
            State = x;
            console.log(x);
        });
}
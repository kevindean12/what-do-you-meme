import {CurrentUser}from "./Users";
import myFetch from "./myFetch";

export let State = {};
export let MyCards = [];

export let CurrentPicture = ""; //could use int index here

export async function Init() {
    State = await myFetch('http://localhost:3000/game');
    //myFetch('http://localhost:3000/game')
    //    .then(x => State = x);
}
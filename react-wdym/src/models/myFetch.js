
import {CurrentUser} from "./Users";
//anti-pattern but using for now: two modules fetch and users are mutually dependent
const api_root = "http://localhost:3000";

export default async function myFetch(url, data){

    let response;

    const headers = {};
    if(CurrentUser && CurrentUser.userID != null){
        headers.authorization = "bearer "  + CurrentUser.userID;
    }


    if(data){
        response = await fetch(api_root + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                ...headers, //merges in properties and values from the headers variable
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    }
    else{ //GET
        response = await fetch(api_root + url, { 
            headers //object with a property named headers whose value is that of variable headers above
         });
    }

    if(response.ok){
        console.log({ success: true })
        return await response.json();
    }else{
        console.log({ success: response.statusText })
        throw await response.json();
    }
}
//Remove thi the nedxt two lines once we get all the necessary sht up n running
import moodsSample from "./moods-sample.json" with {type: 'json'}
import bookmarksSample from "./bookmarks-sample.json" with {type:'json'}

const serverUrl = "https://raspberrypi.taile333c3.ts.net"

//Server Function
const server = (endpoint) =>{
    console.log(`${serverUrl}${endpoint}`);
    return `${serverUrl}${endpoint}`;
}

//HTTP Mapping Functions
//Generic POST function
const post = async (url, data, responseFormat = "json") => {
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let result = await response[responseFormat]();
        return result;
    } catch (e) {
        console.log("POST Error: " + e);
        return;
    }
};

const get = async(url,responseFormat="json")=>{
    try{
        let response= await fetch(url);
        if(!response.ok){
            throw new Error(JSON.stringify(response.json));
        }
        let result = await response[responseFormat]();
        return result;
    }
    catch(e){
        console.log("Response Error: " + e);
        return;
    }
}


//User API
const users = {
    getAll: () => get(server("/user/getAll")),
    login: (name, password) => post(server("/user/login"), { name, password }),
    addUser: (name, password) => post(server("/user/addUser"), { name, password }),
    deleteUser: (Username) => post(server("/user/deleteUser"), { Username })
};

//Mood API
const mood = {
    getToday: ()=>get(server("/mood/today")),
    getById: (id)=>{ //replace with ts once we have the server + route up n running: (id) => getById(server(`/mood?id=${id}`))
        return moodsSample[id];
    }
}

//Bookmark API (AS OF WRITTING THESE ARE ALL TEMPORARY FUNCTIONS)
const bookmarks={
    getByUserId: (id)=>{ //ideally would have bookmarks routed to specific users, not have a dedicated db for it
       return bookmarksSample[id];
    },
    addBookMark: (bookmark)=>{
        return bookmarksSample.shift(bookmark)
    },
    deleteBookmarkById: (uid, bid)=>{
        const result =  bookmarksSample[uid];
        return result.splice(bid);
    },

}






export{
   users, 
   mood,
   bookmarks,
}
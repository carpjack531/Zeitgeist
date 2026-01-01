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
        console.log("post data: \n" + JSON.stringify(data,null,1));
        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            //console.log("Response Content-Type:", response.headers.get("Content-Type"));
            let errorBody =  await response.json();
            console.log(`GET ERROR ${response.status}:\n ${JSON.stringify(errorBody,null, 1)}`);
            throw new Error(errorBody);
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
            let errorBody =  await response.json();
            console.log(`GET ERROR ${response.status}:\n ${JSON.stringify(errorBody,null, 1)}`);
            throw new Error(errorBody);
        }
        let result = await response[responseFormat]();
        return result;
    }
    catch(e){
        console.log("Response Error: " + e.message);
        return;
    }
}


// User API
const users = {
  getAll: () => get(server("/user/getAll")),

  login: (emailAddress, password) =>
    post(server("/user/login"), { emailAddress, password }),

  addUser: (username, emailAddress, password, dateOfBirth) =>
    post(server("/user/addUser"), {
      name: username,
      emailAddress,
      password,
      dateOfBirth,
      notifications: false
    }),

  deleteUser: (username) =>
    post(server("/user/deleteUser"), { username })
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
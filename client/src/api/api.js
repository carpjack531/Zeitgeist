
const serverUrl = "https://raspberrypi.taile333c3.ts.net"

//Server Function
const server = (endpoint) =>{
    console.log(`${serverUrl}${endpoint}`);
    return `${serverUrl}${endpoint}`;
}


//User API
const users = {
    getAll: ()=>get()
}

//Mood API
const mood = {
    getToday: ()=>get(server("/mood/today")),
}


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
    }
}

export{
   users, 
   mood,
}
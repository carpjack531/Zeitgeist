
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
    let response= await fetch(url);
    let result = await response[responseFormat]();
    return result;


}

export{
   server,
   users, 
   mood,
}
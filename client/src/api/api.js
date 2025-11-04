const serverUrl = "https://raspberrypi.taile333c3.ts.net"

//Server Function
const server = (endpoint) =>{
    console.log(`${serverUrl}${endpoint}`);
    return `${serverUrl}${endpoint}`;
}

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
    }
};

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
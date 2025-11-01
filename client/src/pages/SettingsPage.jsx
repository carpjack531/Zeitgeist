import React from 'react';
import UserHeader from '../comps/UserHeader.jsx'
import IMG_0849 from '../assets/IMG_0849.jpg'
// based off of the ui from: https://flowbite.com/application-ui/demo/users/settings/
const SettingsPage = (props) => {

    const Entry = ({name,type})=>{
        return(
            <div className="flex items-start justify-around m-2">
                <p className="min-w-">{name}</p>
                <input className="bg-white" type={type}/>
            </div>
        )
    }   

    return(
        <div className="flex flex-col text-start p-10 min-h-screen bg-amber-700 font-sans items-center">
            <h1 className="text-4xl">Settings </h1>
            <div className="flex flex-col my-10 content-between">
                <h2>Account Information</h2>
                <div className="my-10"> 
                    <Entry name="Email Address"/>
                    <Entry name="Date of Birth"/>
                    <p></p>
                </div>

                <h2>Preferences</h2>
                <div className="my-10">
                    <p>Language</p>
                    <p>Toggle Dark Mode</p>
                    <p>Toggle Notifications</p>
                </div>

                <h2>Data/Privacy</h2>
                <div className="my-10">
                    <p>Request Data</p>
                    <p>Clear Bookmarks</p>
                    <p>Clear History</p>
                    <p>Delete Account</p>
                </div>
            </div>

        </div>

    )
           /*
    return (
            const Entry = ({title, input}) => {
        return(
        <div className="flex flex-col items-start w-2/5 mr-2 my-2 bg-red-50">
            <p>{title}</p>
            {input}
        </div>
        )
    }
        <div className="flex flex-col items-start justify-center min-h-screen bg-pastel-purple-500 ">
            <h1 className="font-bold text-4xl m-10">Settings</h1>
            <div className="flex flex-col justify-start items-start m-15  min-h-full ">
            <h1 className="">Hello</h1>
            <div className="flex flex-col min-h-screen flex-wrap p-2  bg-pastel-purple-200">
                <div className="flex flex-wrap w-200 justify-start gap-5">
                    <Entry title="Username" input={<input className="w-full" type="text"/>}/>
                    <Entry title="Email" input={<input type="text"/>}/>
                    <Entry title="Timezone" input={<input type="text"/>}/>
                    <Entry title="Password" input={<input type="text"/>}/>
                    <Entry title="Phone Number" input={<input type="text"/>}/>
                    <Entry title="Birthday" input={<input type="text"/>}/>
                </div>
            </div>
            
            <h1 className="">Hello</h1>
            <div className="flex flex-col  flex-wrap p-2 bg-pastel-purple-200">
                <div className="flex flex-wrap w-200 justify-start gap-5">
                    <Entry title="Username" input={<input className="w-full" type="text"/>}/>
                    <Entry title="Email" input={<input type="text"/>}/>
                    <Entry title="Timezone" input={<input type="text"/>}/>
                    <Entry title="Password" input={<input type="text"/>}/>
                    <Entry title="Phone Number" input={<input type="text"/>}/>
                    <Entry title="Birthday" input={<input type="text"/>}/>
                </div>
            </div>
            <div>
            </div>
            </div>
        </div>
       
        
    );*/
};

export default SettingsPage;
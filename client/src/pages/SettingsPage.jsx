import React from 'react';
import UserHeader from '../comps/UserHeader.jsx'
import SettingsHeader from "../comps/SettingsHeader.jsx"
import IMG_0849 from '../assets/IMG_0849.jpg'
// based off of the ui from: https://flowbite.com/application-ui/demo/users/settings/
const SettingsPage = (props) => {

    const Entry = ({name,type})=>{
        return(
            <div className="flex flex-row items-start justify-between">
                <p>{name}</p>
                <input type={type}/>
            </div>
        )
    }   

    return(
        <div className="flex flex-col text-start items-start p-10 min-h-screen bg-amber-700 font-sans">
            <h1 className="text-4xl">Settings </h1>
            <div className="flex flex-col m-10">
                <h2>Account</h2>
                <div className=""> 
                    <Entry name="Email Address" type="text"/>
                    <p>Date of Birth</p>
                    <p>Location</p>
                    <p>Delete Account</p>
                    <p></p>
                </div>
                <h2>Preferences</h2>
                <div className="">
                    <p>Language</p>
                    <p>Toggle Dark Mode</p>
                    <p>Toggle Notifications</p>
                </div>

                <h2>Privacy</h2>
                <div className="">
                    <p>Request Data</p>
                    <p>Clear Bookmarks</p>
                    <p>Clear History</p>
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
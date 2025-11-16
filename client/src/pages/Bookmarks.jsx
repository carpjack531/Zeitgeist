import { bookmarks } from "@api/api.js";
import { mood } from "@api/api.js";
import { useEffect, useState } from "react";

const Bookmarks = () => {
  //Names need to be different from bookmarks, otherwise the name of the api will auto-set to bookmarks2 during runtime
  const [userBookmarks, setUserBookmarks] = useState([]);

  const userId = 1; //change to a prop once logged in
  //Scuffed test function(s) for testing purposes


  const loadBookmarks = () => {
    //this is not good lol
    const bookmark_obj = bookmarks.getByUserId(userId);
    const fromMoodIds = bookmark_obj.bookmarks.map((item) => {
      return mood.getById(item);
    });
    setUserBookmarks(fromMoodIds);
  };

  const renderBookMark = (key) =>{
    console.log("renderBookmark: " + key);
  }

  const renderSideBar = () => {
    return (
      <div className="bg-purple-500  max-h-screen flex flex-col font-bold items-center overflow-y-scroll 
         [direction:rtl]
       [&::-webkit-scrollbar]:bg-purple-100 
       [&::-webkit-scrollbar-thumb]:bg-amber-500
          [&::-webkit-scrollbar-thumb]:rounded-2xl"
        >


        {userBookmarks.map((mood, index) => (
          <button
            key={index}
            className="py-10 px-10 min-w-full border-b-pastel-purple-400 border-b-2 text-pastel-purple-300 focus:bg-black"
            onClick={()=>{renderBookMark(index)}}
          >
            <p>{mood.date}</p>
            <p>{mood.moods[0]}</p>
          </button>
        ))}
      </div>
    );
  };

  useEffect(() => {
    loadBookmarks();
  }, []);

  return (
    <div className="flex flex-row font-arimo  bg-blue-50 my-10 ">
      
       
        {renderSideBar()}
    
    </div>
  );
};

export default Bookmarks;

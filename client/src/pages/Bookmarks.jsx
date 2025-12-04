import { bookmarks } from "@api/api.js";
import { mood } from "@api/api.js";
import { useEffect, useState } from "react";

const Bookmarks = () => {
  //Names need to be different from bookmarks, otherwise the name of the api will auto-set to bookmarks2 during runtime
  const [userBookmarks, setUserBookmarks] = useState([]);
  const [selectedBookmark, setSelectedBookmark] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const userId = 1; //change to a prop once logged in
  //Scuffed test function(s) for testing purposes

  const newLoadBookmarks = async()=>{
    
  }


  const loadBookmarks = async () => {
    //this is not good lol\
    try {
      const bookmark_obj = await bookmarks.getByUserId(userId);
      const fromMoodIds = bookmark_obj.bookmarks.map((item) => {
        return mood.getById(item);
      });
      setUserBookmarks(fromMoodIds);
      setSelectedBookmark(fromMoodIds[0]);
      setIsLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const SideBar = () => {
    return (
      <div
        className="fixed bg-purple-500 w-1/10 max-h-screen flex flex-col font-bold items-center overflow-y-scroll 
         [direction:rtl]
       [&::-webkit-scrollbar]:bg-purple-100 
       [&::-webkit-scrollbar-thumb]:bg-amber-500
         [&::-webkit-scrollbar-thumb]:rounded-2xl"
      >
        {userBookmarks.map((mood, index) => (
          <button
            key={index}
            className="py-10 px-10 min-w-full border-b-pastel-purple-400 border-b-2 text-pastel-purple-300 focus:bg-black"
            onClick={() => {
              setIsLoading(true);
              setSelectedBookmark(userBookmarks[index]);
              setIsLoading(false);
            }}
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
    <div className="flex flex-row font-arimo content-center min-h-screen bg-blue-50">
      <SideBar />
      <div className="flex flex-col justify-center mx-auto mb-auto gap-20 p-20">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <h1>{selectedBookmark.date}</h1>
            <p>{selectedBookmark.moods[0]}</p>
            <div>
            <h1 className="font-semibold mb-10">Breakdown:</h1>
            <ul className="list-disc list-inside text-left">
              {selectedBookmark.moods.map((mood, index) => (
                <li key={index}>{mood}</li>
              ))}
            </ul>
            </div>
            <a href="/" className="text-center text-blue-600 font-semibold mt-8">Return to home screen</a>
          </>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;

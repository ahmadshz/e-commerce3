import React, { useContext, useEffect } from "react";
import { FavoriteContext } from "../../../Context/FavoriteContext";
import { FaTimes, FaTrash, FaRegHeart } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import {  useNavigate } from "react-router-dom";

const Favorite = () => {
  const { favorites, removeFromFavorites, clearFavorites, showSidebar, toggleFavorite } =
    useContext(FavoriteContext);

  const navigate = useNavigate();
  const goTo = (id) => {
    toggleFavorite();
    window.scrollTo(0, 0); 
    navigate(`/singlePost/${id}`);
  };
  
  useEffect(() => {
    if (showSidebar) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showSidebar]);

  return (
    <div>
      {/* Sidebar with slide animation */}
      <div
        className={`z-[100000] fixed right-0 bottom-0 bg-white text-black h-full
           w-72 md:w-96 p-6 overflow-y-auto shadow-2xl transform transition-transform duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between border-b border-gray-200 items-center pb-6">
          <h2 className="text-[17px] lg:text-2xl  font-semibold text-black">المفضلة</h2>
          <button
            onClick={toggleFavorite}
            className="text-gray-500 hover:text-red-500 transition-colors duration-300"
            aria-label="Close Favorites"
          >
            <RiCloseCircleLine size={28} />
          </button>
        </div>

        {/* Clear all button */}
        {favorites.length > 0 && (
          <button
            onClick={clearFavorites}
            className="w-full py-3 text-[16px]  font-semibold text-primary hover:text-white border md:border-2 border-primary
             hover:bg-primary px-4 rounded-lg flex items-center justify-center transition-all duration-300 mb-6"
          >
            <FaTrash  className="mx-2" />
            حذف جميع المفضلة
          </button>
        )}

        {/* Favorites list */}
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <FaRegHeart size={48} className="text-gray-300 mb-4" />
            <p className="text-gray-500 text-[14px]">قائمة المفضلة لديك فارغة.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {favorites.map((post) => (
              <div onClick={() => goTo(`${post._id}`)}
                key={post._id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg  transition-all"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={post.images.length > 1 ? post.images[0] : post.images}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h3 className=" text-[14px] ">{post.title}</h3>
                  </div>
                </div>

                <button
                  onClick={() => removeFromFavorites(post._id)}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                  aria-label="Remove from Favorites"
                >
                  <FaTimes size={20} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Total favorites count */}
        {favorites.length > 0 && (
          <p className="mt-6 text-sm text-gray-500 text-center">
            مجموع المفضلات: {favorites.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default Favorite;
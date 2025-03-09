import React, { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [showSidebar, setShowSidebar] = useState(false); // حالة لإدارة عرض الـ Sidebar

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (post) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, post];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const removeFromFavorites = (postId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((post) => post._id !== postId);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  const toggleFavorite = () => {
    setShowSidebar(!showSidebar); 
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites, showSidebar, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
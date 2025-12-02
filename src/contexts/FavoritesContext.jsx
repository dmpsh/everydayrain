import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavoritesContext = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const lsName = 'favorites';
    const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem(lsName)) || []); // Инициализация
    
    useEffect(() => {
        localStorage.setItem(lsName, JSON.stringify(favorites))
    }, [favorites]); // испл. для вывода списка избранного на странице FavoritesPage.jsx

    const addToFavorites = (item) => {
        setFavorites(prev => [...prev, item])
    }
    const removeFromFavorites = (itemId) => {
        setFavorites(prev => prev.filter(item => item.id !== itemId))
    }
    const isFavorite = (itemId) => {
        return favorites.some(item => item.id === itemId)
    }

    const value = { favorites, addToFavorites, removeFromFavorites, isFavorite };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}
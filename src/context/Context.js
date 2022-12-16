import { useContext, createContext, useState, useEffect } from "react";
import instance from "../axios";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [url, setUrl] = useState(`/trending/all/day?api_key=${API_KEY}`);
  const [popup,setPopup]=useState({isOpen:false,data:{}});
  const [searchActive,setSearchActive]=useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const {data} = await instance.get(url);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, [url,setUrl]);

  return (
    <AppContext.Provider value={{ movies, setMovies, setUrl,popup,setPopup,searchActive,setSearchActive}}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default AppProvider;
export { useAppContext };

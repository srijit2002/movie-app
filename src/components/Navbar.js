import React,{useState,useEffect} from 'react'
import {CiSearch} from 'react-icons/ci'
import { useAppContext } from '../context/Context';
import { ReactComponent as Logo } from '../logo.svg';

const Navbar = () => {

  const [input,setInput]=useState();
  const {setUrl,setSearchActive} =useAppContext();
  const searchUrl=`search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=`
  useEffect(()=>{
    const timeOut=setTimeout(()=>{
        if(input){
          setUrl(`${searchUrl}${input}`);
          setSearchActive(true);
        }else{
          setUrl(`/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
          setSearchActive(false);
        }
    },150);
    return ()=> clearTimeout(timeOut);
  },[input,searchUrl,setUrl,setSearchActive]);

  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <Logo/>
      </div>
      <div className='navbar_search'>
        <div className='navbar_search_icon'>
          <CiSearch/>
        </div>
        <div className='navbar_search_input'>
          <input type="text" placeholder='Search for a movie' val={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
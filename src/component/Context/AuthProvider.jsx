import React, { createContext, useContext, useEffect, useState } from 'react'
import DoLoginRefresh from '../Private/Common/DoLoginRefresh'

export const authContext=createContext({});


const AuthProvider = ({child}) => {
  let isRefreshRequested=false;
  const {validateAndRefresh} = DoLoginRefresh();
    const [auth, setAuth] = useState({
                                    userId:"",
                                    username:"",
                                    role:"CUSTOMER",
                                    isAuthenticated:false,
                                    accessExpiration:"",
                                    refreshExpiration:""

                                });


     
    const refresh=async()=>{
      
      const user = await validateAndRefresh();
      
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
        setAuth({...user});
      }
      
    }  
    
    useEffect(()=>{
      if(!isRefreshRequested){
        isRefreshRequested=true;
        refresh();
      }
    },[]);

  return (
    <authContext.Provider value={{auth,setAuth}}>
        {child}
    </authContext.Provider>
  )
}

export default AuthProvider

export const useAuth=()=>useContext(authContext);



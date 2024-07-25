import {useState, useEffect} from "react";
 
const useOnlineStatus = ()=>{
    console.log("useOnlineStatus called");
    const [onlineStatus, setOnlineStatus] =  useState(true);

    useEffect(()=>{
        window.addEventListener("offline", (event) =>{
            setOnlineStatus(false);
        });

        window.addEventListener("online", (event) =>{
            setOnlineStatus(true);
        });
    },[]);


    return onlineStatus;

}

export default useOnlineStatus;
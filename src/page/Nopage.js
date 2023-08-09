import {  useNavigate } from "react-router-dom";

export default function Nopage() {
   const navigate=useNavigate();
   
   
   return(
        <div>

            sorry you r in wrong place <button className="rounded-full bg-base-200 p-2 m-5"  onClick={()=>navigate("/")}> Go Home</button>
        </div>
    )
    
};

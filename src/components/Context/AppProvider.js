import { createContext, useState, useContext, useEffect } from "react";
import { Api } from "../Api/API";
const BookCtx = createContext();

function AppProvider({ children }) {
  const [BookData, setData] = useState([]);
  // const datastore = [
  //   {
  //     id: 1,
  //     name: "Nation First",
  //     Author: "V.P.Malik",
  //     Language: "English",
  //     Pages: "240",
  //     Published: "2019",
  //   },
  //   {
  //     id: 2,
  //     name: " A Nation of Idiots",
  //     Author: "Daksh tyagi",
  //     Language: "English",
  //     Pages: "300",
  //     Published: "2021",
  //   },
  // ];
useEffect(()=>{
  const getAllBooks= async()=>{
    const response= await fetch(Api,{
      method: "GET",
    })
    const data=await response.json();
    console.log("data consoled",data);
    setData(data);
  }
  getAllBooks();
},[]);
   

  return (
    <BookCtx.Provider value={{ BookData, setData }}>
      {children}
    </BookCtx.Provider>
  );
}
export const Appstate = () => {
  return useContext(BookCtx);
};
export default AppProvider;

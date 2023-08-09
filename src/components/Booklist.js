import React from "react";
import Base from "../page/Base";
import BookCard from "./BookCard";
import { Appstate } from "./Context/AppProvider";

function Booklist() {
const {BookData}=Appstate();
  return (
    <Base>
    {BookData.map((boook,index)=>(
        <BookCard
        book={boook}

        key={index}
        />
      ))}
    
    
    
    </Base>
  );
}

export default Booklist;


// {/* <h1> ss</h1>
// {BookData.map((boo, idx) => (
//   <BookCard
//     book={boo}
//     BookData={BookData}
//     setData={setData}
//     key={boo.id}
//   />
// ))} */}
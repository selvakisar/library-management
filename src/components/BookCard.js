import React from "react";
import { useNavigate } from "react-router-dom";
import { Appstate } from "./Context/AppProvider";
import { Api } from "./Api/API";

export default function BookCard({ book}) {
const {BookData,setData}=Appstate()


const navigate=useNavigate()


const delBook = async (id)=>{


   
  let res = window.confirm("Are you sure you want to delete")
  if (res){
    // api operation 
    const response = await fetch(`${Api}/${id}`,{
      method: "DELETE",
    });
    const data=await response.json();
    console.log(data);
    const newBooklist = BookData.filter((book,idx)=>book.id !== id)
    setData (newBooklist);
  }
 
}
  return (
    <div>
      <div className="card card-compact w-96 m-2 p-1 bg-accent
      shadow-xl">
        <div className="card-body" >
          <h1 className="card-title ">{book.name}</h1>
          <p>Author:{book.Author}</p>
          <p>Language:{book.Language} </p>
          <p> Pages:{book.Pages} </p>
          <p>Published:{book.Published} </p>
          

          <div className="card-actions justify-end">
            <button onClick= {()=>delBook(book.id)}  className="btn btn-danger m-2">Delete</button>
            <button className="btn btn-primary m-2"  onClick={()=>navigate(`/edit/${book.id}`) }   >Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
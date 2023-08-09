import { useNavigate, useParams } from "react-router-dom";
import Base from "../page/Base";
import { useEffect, useState } from "react";
import { Appstate } from "./Context/AppProvider";
import { Api } from "./Api/API";

export default function Editbook() {
    const { BookData, setData }=Appstate();
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [Author, setAuthor] = useState("");
  const [Language, setLanguage] = useState("");
  const [Pages, setPages] = useState("");
  const [Published, setPublished] = useState("");

  useEffect(() => {
    console.log("id: ", id);

    const toEditBookById = BookData.find((book, index) => book.id === id);
    console.log(toEditBookById)

    setName(toEditBookById.name);
    setAuthor(toEditBookById.Author);
    setLanguage(toEditBookById.Language);
    setPages(toEditBookById.Pages);
    setPublished(toEditBookById.Published);
  }, []);


  async function editbook(){
    const editedBookObj={
        name,
        Author,
        Language,
        Pages,
        Published,
    }
    // api call
const response = await fetch(`${Api}/${id}`,{
  method: 'PUT',
  body: JSON.stringify(editedBookObj),
  headers:{
    'content-type':"application/json"
}
})

const data=await response.json();
console.log(data)

    console.log(editedBookObj) 
    // find index is same for selected book to edit and populate  in to UI
        const bookIndex = 
        BookData.findIndex((book,index)=>book.id === id)
        console.log(bookIndex)
        BookData[bookIndex]=data;
        setData([...BookData])
        navigate("/book/all")
  }
  return (
    <Base>
      <div className="p-5">Please Fill the form to add new Book</div>
      <div className="form-control">
  

        <label className="input-group input-group-md m-2">
          <span>Name</span>
          <input
            type="text"
            placeholder="Enter Book Name"
            className="input input-bordered input-md w-96"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="input-group input-group-md  m-2">
          <span>Author</span>
          <input
            type="text"
            placeholder="Enter Author Name"
            className="input input-bordered input-md w-96"
            value={Author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>

        <label className="input-group input-group-md  m-2">
          <span>Language</span>
          <input
            type="text"
            placeholder="Enter Language "
            className="input input-bordered input-md w-96"
            value={Language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </label>
        <label className="input-group input-group-md  m-2">
          <span>Pages</span>
          <input
            type="text"
            placeholder="Enter the pages count"
            className="input input-bordered input-md w-96"
            value={Pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </label>
        <label className="input-group input-group-md m-2">
          <span>Published</span>
          <input
            type="text"
            placeholder="Enter Published Year "
            className="input input-bordered input-md w-96"
            value={Published}
            onChange={(e) => setPublished(e.target.value)}
          />
        </label>

        <button
          className="rounded-full bg-base-200 p-2 m-5"
          onClick={() => editbook()}
        >
          Edit Book
        </button>
      </div>
    </Base>
  );
}

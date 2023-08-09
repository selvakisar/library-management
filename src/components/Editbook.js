import { useNavigate, useParams } from "react-router-dom";
import Base from "../page/Base";
import { useEffect, useState } from "react";
import { Appstate } from "./Context/AppProvider";
import { Api } from "./Api/API";
import { useFormik } from "formik";
import { BookSchema } from "./bookschema/bookschema";
export default function Editbook() {
  const { BookData, setData } = Appstate();
  const navigate = useNavigate();
  const { id } = useParams();

  // const [name, setName] = useState("");
  // const [Author, setAuthor] = useState("");
  // const [Language, setLanguage] = useState("");
  // const [Pages, setPages] = useState("");
  // const [Published, setPublished] = useState("");
  const toEditBookById = BookData.find((book, index) => book.id === id);

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: toEditBookById.name,
        Author: toEditBookById.Author,
        Language: toEditBookById.Language,
        Pages: toEditBookById.Pages,
        Published: toEditBookById.Published,
      },
      validationSchema: BookSchema,
      onSubmit: (editedBook) => {
        console.log(editedBook);
        editbook(editedBook);
      },
    });
  // useEffect(() => {
  //   console.log("id: ", id);

  //   console.log(toEditBookById)

  //   setName();
  //   setAuthor(toEditBookById.Author);
  //   setLanguage(toEditBookById.Language);
  //   setPages();
  //   setPublished(toEditBookById.Published);
  // }, []);

  async function editbook(editedBook) {
    // const editedBookObj={
    //     name,
    //     Author,
    //     Language,
    //     Pages,
    //     Published,
    // }
    // api call
    const response = await fetch(`${Api}/${id}`, {
      method: "PUT",
      body: JSON.stringify(editedBook),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    console.log(editedBook);
    // find index is same for selected book to edit and populate  in to UI
    const bookIndex = BookData.findIndex((book, index) => book.id === id);
    console.log(bookIndex);
    BookData[bookIndex] = data;
    setData([...BookData]);
    navigate("/book/all");
  }
  return (
    <Base>
      <div className="p-5">Please Fill the form to add new Book</div>
      <div className="form-control">
        <form onSubmit={handleChange}>
          <label className="input-group input-group-md m-2">
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter Book Name"
              className="input input-bordered input-md w-96"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
            />
          </label>
          {touched.name && errors.name ? (
            <div className="text-base-200">{errors.name}</div>
          ) : (
            ""
          )}

          <label className="input-group input-group-md  m-2">
            <span>Author</span>
            <input
              type="text"
              placeholder="Enter Author Name"
              className="input input-bordered input-md w-96"
              value={values.Author}
              onChange={handleChange}
              onBlur={handleBlur}
              name="Author"
            />
          </label>
          {touched.Author && errors.Author ? (
            <div className="text-base-200">{errors.Author}</div>
          ) : (
            ""
          )}

          <label className="input-group input-group-md  m-2">
            <span>Language</span>
            <input
              type="text"
              placeholder="Enter Language "
              className="input input-bordered input-md w-96"
              value={values.Language}
              onChange={handleChange}
              onBlur={handleBlur}
              name="Language"
            />
          </label>
          {touched.Language && errors.Language ? (
            <div className="text-base-200">{errors.Language}</div>
          ) : (
            ""
          )}

          <label className="input-group input-group-md  m-2">
            <span>Pages</span>
            <input
              type="text"
              placeholder="Enter the pages count"
              className="input input-bordered input-md w-96"
              value={values.Pages}
              onChange={handleChange}
              onBlur={handleBlur}
              name="Pages"
            />
          </label>
          {touched.Pages && errors.Pages ? (
            <div className="text-base-200">{errors.Pages}</div>
          ) : (
            ""
          )}

          <label className="input-group input-group-md m-2">
            <span>Published</span>
            <input
              type="text"
              placeholder="Enter Published Year "
              className="input input-bordered input-md w-96"
              value={values.Published}
              onChange={handleChange}
              onBlur={handleBlur}
              name="Published"
            />
          </label>
          {touched.Published && errors.Published ? (
            <div className="text-base-200">{errors.Published}</div>
          ) : (
            ""
          )}

          <button className="rounded-full bg-base-200 p-2 m-5" type="submit">
            Edit Book
          </button>
        </form>
      </div>
    </Base>
  );
}

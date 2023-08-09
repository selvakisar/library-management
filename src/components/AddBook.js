import Base from "../page/Base";
import { useNavigate } from "react-router-dom";
import { Appstate } from "./Context/AppProvider";
import { Api } from "./Api/API";
import { useFormik } from "formik";
import { BookSchema } from "./bookschema/bookschema";



export default function AddBooks() {
//  formik using to validate
const {values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched} = useFormik(
    {
        initialValues:{
            name:"",
            Author:"",
            Pages:"",
            Published:"",
            Language:"",
        },
        validationSchema:BookSchema,
        onSubmit:(newBook)=>{
            console.log(newBook)
            addNewBook(newBook)

        }
    }
)

    
    const {BookData, setData}=Appstate()
    const navigate=useNavigate();
    


    async function addNewBook(newBook){
   

        const response = await fetch(Api,{
            method: "POST",
            body: JSON.stringify(newBook),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            const data= await response.json()
            // console.log(data);
            // console.log(newBook)
      
    //   // add new data
            setData([...BookData,data]);
  
            values.name=""
            values.Author=""
            values.Pages=""
            values.Published=""
            values.Language=""
            navigate("/book/all")
          
    }
    return (
        <Base>
            <div className="p-5">Please Fill the form to add new Book</div>
            <div className="form-control">
           
                <form onSubmit={handleSubmit}>
                <label className="input-group input-group-md m-2">
                    <span>Name</span>
                    <input 
                    type="text" 
                    placeholder="Enter Book Name" 
                    className="input input-bordered input-md w-96"
                    value ={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                     />
                </label>
                {touched.name && errors.name ? 
                     <div className="text-red-300">
                         {errors.name}
                     </div> : ""}

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
                {touched.Author && errors.Author ? 
                     <div className="text-red-300">
                         {errors.Author}
                     </div> : ""}

                <label className="input-group input-group-md  m-2">
                    <span>Language</span>
                    <input type="text"
                     placeholder="Enter Language " 
                     className="input input-bordered input-md w-96" 
                     value={values.Language}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     name="Language"
                     />
                </label>
                {touched.Language && errors.Language ? 
                     <div className="text-red-300">
                         {errors.Language}
                     </div> : ""}
                <label className="input-group input-group-md  m-2">
                    <span>Pages</span>
                    <input 
                    type="text" 
                    placeholder="Enter the pages count" 
                    className="input input-bordered input-md w-96" 
                    value ={values.Pages}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="Pages"
                    />
                </label>
                {touched.Pages && errors.Pages ? 
                     <div className="text-red-300">
                         {errors.Pages}
                     </div> : ""}

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
                {touched.Published && errors.Published ? 
                     <div className="text-red-300">
                         {errors.Published}
                     </div> : ""}
               

                <button className="rounded-full bg-base-200 p-2 m-5"
         type="submit"
                 >
                    Add Book
                </button>
                </form>
            </div>
        </Base>
    )
}
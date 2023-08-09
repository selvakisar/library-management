import {  useEffect} from 'react'
import Base from './Base'
import { useNavigate } from 'react-router-dom'

function Dashboard({bookd}) {

const navigate =useNavigate();
useEffect(()=>{
    console.log("am mounted")
},[]) 
  return (
   
        <Base> 
   <div>
    
        <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now to Manage!</h1>
      <p className="py-6">A library management system is software that is designed to manage all the functions of a library. It helps librarian to maintain the database of new books and the books that are borrowed by members along with their due dates.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary" onClick={()=>navigate("/book/all")}>Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        </Base>


   
    
  )
}

export default Dashboard
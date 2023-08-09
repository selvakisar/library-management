import React from "react";

function Topbar() {
  return (
 
      <div style={{backgroundImage:'url("https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581_1280.jpg")'}} className="navbar bg-accent">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl italic " href="/">
            Welcome to Library Management
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
      </div>
  
  );
}

export default Topbar;

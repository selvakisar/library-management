import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

function Base({children}) {
  return (
    <div
      className="flex flex-col w-full border-opacity-50 h-screen"
      data-theme="light"
    >
      <Topbar />

      <div className="flex flex-row  lg:flex-row">
        <div className="grid flex-row h-screen w-1/5  card bg-base-400 m-2   rounded-box place-items-center ">
          <Sidebar />
        </div>
        <div className="divider lg:divider-horizontal bg-accent"></div>
        <div   style={{ backgroundImage: 'url("https://cdn.dribbble.com/users/1936570/screenshots/15671618/media/8b5f68528a7089ad95e2cb9a98f3977f.gif")'}} className=" flex-col h-screen w-4/5 card m-2 bg-base-400   rounded-box place-items-center">
                {children}
        </div>
      </div>
    </div>
  );
}

export default Base;

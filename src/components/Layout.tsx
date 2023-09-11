import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-200 dark:bg-gray-900 dark:text-white">
        <a href="/">
          <h1 className="text-2xl font-semibold p-4 bg-blue-500 text-white dark:bg-gray-800 dark:text-gray-200">
            Epic Quest: Legends of Valor
          </h1>
        </a>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

import React from "react";
import { useSearch } from "../context/SearchContext";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const { setSearchQueryWithDebounce } = useSearch();
  const location = useLocation();
  const [isShowSearchBar, setIsShowSearchBar] = React.useState(false);

  React.useEffect(() => {
    setIsShowSearchBar(location.pathname.includes("user-post"));
  }, [location.pathname]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchQueryWithDebounce(value);
  };

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="flex justify-start text-white"></div>
        <div>
          <input
            type="text"
            onChange={handleChange}
            disabled={isShowSearchBar}
            placeholder="Search"
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 w-full"
          />
        </div>
        <div className="flex items-center text-white">
          <a href="https://github.com/okrahul" target="_blank">
            <ion-icon name="logo-github" size="large"></ion-icon>
          </a>
        </div>
      </div>
    </nav>
  );
};

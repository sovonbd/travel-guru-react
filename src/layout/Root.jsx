import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Logo from "../components/Logo/Logo";
import SearchBox from "../components/Searchbox/SearchBox";

const Root = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="container max-w-[1240px] mx-auto">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        {location.pathname === "/" ? <SearchBox></SearchBox> : ""}
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;

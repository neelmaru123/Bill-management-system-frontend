import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sideBar";

function HomeLayout() {
    return (
        <>
            <Header />
            <Sidebar />
            <Outlet />
        </>


    )
}

export default HomeLayout;
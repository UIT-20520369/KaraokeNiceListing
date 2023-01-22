import { Outlet } from "react-router-dom";
import Header from "../components/header/main-header";
import Footer from "../components/footer/main-footer";
import React from "react";

const defaultLayout = () => {
    return (
        <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    )
}

export default defaultLayout;
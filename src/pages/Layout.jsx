import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../App.css";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="px-[20px] md:px-[50px] container mx-auto">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

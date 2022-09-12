import React from "react";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";

export default function Layout({ children }) {
     return (
          <>
               <Header />
               {children}
               <Footer />
          </>
     );
}

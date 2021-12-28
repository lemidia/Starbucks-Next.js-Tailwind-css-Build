import React, { useState } from "react";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`min-h-screen font-opensans relative overflow-x-hidden ${
        open && "max-h-screen overflow-y-hidden"
      }`}
    >
      <Nav open={open} setOpen={setOpen} />
      <MobileNav open={open} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

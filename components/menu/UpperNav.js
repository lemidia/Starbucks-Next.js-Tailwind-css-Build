import React from "react";
import Link from "next/link";

function UpperNav() {
  return (
    <nav className="bg-[#F9F9F9] border-b-2 border-gray-300 mb-16">
      <ul className="max-w-[1240px] mx-auto flex space-x-8 py-5">
        <li className="">
          <Link href="/menu">All products</Link>
        </li>
        <li className="">Featured</li>
        <li className="">Previous Orders</li>
        <li className="">Favorite Products</li>
      </ul>
    </nav>
  );
}

export default UpperNav;

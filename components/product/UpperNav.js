import React from "react";
import Link from "next/link";

function UpperNav({ categoryName, categoryPath, productName }) {
  return (
    <nav className="bg-[#F9F9F9]">
      <ul className="max-w-[1240px] mx-auto flex space-x-8 py-4 px-5 xl:px-0">
        <li>
          Menu / Hot Coffees /{" "}
          <span className="font-semibold">{productName}</span>
        </li>
      </ul>
    </nav>
  );
}

export default UpperNav;

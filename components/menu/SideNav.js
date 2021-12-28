import React from "react";
import Link from "next/link";

function SideNav() {
  return (
    <nav className="space-y-10 hidden lg:flex lg:flex-col lg:flex-1">
      {/* drinks */}
      <div>
        <h3 className="text-2xl font-semibold mb-5">Drinks</h3>
        <ul className="space-y-4 text-gray-500 text-lg font-medium">
          <Link href="/menu/drinks/hot-coffees">Hot Coffees</Link>
          <li>Hot Teas</li>
          <li>Hot Drinks</li>
        </ul>
      </div>
      {/* Food  */}
      <div>
        <h3 className="text-2xl font-semibold mb-5">Food</h3>
        <ul className="space-y-4 text-gray-500 text-lg font-medium">
          <li>Hot Breakfast</li>
          <li>Bakery</li>
          <li>Lunch</li>
          <li>Snacks & Sweets</li>
          <li>Oatmeal & Yogurt</li>
        </ul>
      </div>
      {/* At Home Coffee  */}
      <div className="">
        <h3 className="text-2xl font-semibold mb-5">At Home Coffee</h3>
        <ul className="space-y-4 text-gray-500 text-lg font-medium">
          <li>Whole Bean</li>
          <li>VIA Instant</li>
        </ul>
      </div>
    </nav>
  );
}

export default SideNav;

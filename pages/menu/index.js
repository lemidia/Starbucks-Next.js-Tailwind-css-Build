import React from "react";
import Link from "next/link";
import SideNav from "../../components/menu/SideNav";
import UpperNav from "../../components/menu/UpperNav";

function Menu() {
  return (
    <>
      {/* menu nav (above) */}
      <UpperNav />
      <div className="max-w-[1240px] mx-auto px-5 xl:px-0 mb-16">
        {/* 2 col menu */}
        <div className="flex mt-8 space-x-0 lg:space-x-16">
          {/* side nav */}
          <SideNav />
          {/* Menu */}
          <div className="space-y-12 flex-[4]">
            <h2 className="text-4xl font-extrabold">Menu</h2>
            {/* drinks */}
            <div>
              <h3 className="text-3xl font-extrabold border-b-2 pb-4 mb-7">
                Drinks
              </h3>

              <div className="grid grid-cols-2 space-y-5">
                <div className="flex items-center space-x-5">
                  <div className="">
                    <img
                      className="rounded-full h-32"
                      src="/img/menu-img/drinks/Hot-Coffees.webp"
                      alt=""
                    />
                  </div>
                  <div className="text-2xl font-semibold">
                    <Link href="/menu/drinks/hot-coffees">Hot Coffees</Link>
                  </div>
                </div>
                <div className="flex items-center space-x-5">
                  <div className="">
                    <img
                      className="rounded-full h-32"
                      src="/img/menu-img/drinks/Hot-Drinks.webp"
                      alt=""
                    />
                  </div>
                  <div className="text-2xl font-semibold">
                    <Link href="#">Hot Drinks</Link>
                  </div>
                </div>
                <div className="flex items-center space-x-5">
                  <div className="">
                    <img
                      className="rounded-full h-32"
                      src="/img/menu-img/drinks/Hot-Teas.webp"
                      alt=""
                    />
                  </div>
                  <div className="text-2xl font-semibold">
                    <Link href="#">Hot Teas</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Food */}
            <div>
              <h3 className="text-3xl font-extrabold border-b-2 pb-4 mb-7">
                Food
              </h3>

              <div className="grid grid-cols-2 space-y-5">
                <div className="flex items-center space-x-5">
                  <div className="">
                    <img
                      className="rounded-full h-32"
                      src="/img/menu-img/food/Hot-Breakfast.webp"
                      alt=""
                    />
                  </div>
                  <div className="text-2xl font-semibold">
                    <Link href="/menu/food/hot-breakfast">Hot Breakfast</Link>
                  </div>
                </div>
                <div className="flex items-center space-x-5">
                  <div className="">
                    <img
                      className="rounded-full h-32"
                      src="/img/menu-img/food/Bakery.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text-2xl font-semibold">
                    <Link href="#">Bakery</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;

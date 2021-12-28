import React from "react";
import Link from "next/link";
import UpperNav from "../../../components/menu/UpperNav";
import SideNav from "../../../components/menu/SideNav";

function HotCoffees() {
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
            <h2 className="text-4xl font-extrabold">Hot Coffees</h2>
            {/* drinks */}
            <div>
              <h3 className="text-3xl font-extrabold border-b-2 pb-4 mb-7">
                Americanos
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
                    <Link href="/menu/product/406">Caffe Americano</Link>
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

export default HotCoffees;

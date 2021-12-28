import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UpperNav from "../../../components/product/UpperNav";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import { products } from "../../../resources/data";

function Product() {
  const { query } = useRouter();
  const productId = query.id;

  const [product, setProduct] = useState({});
  const [error, setError] = useState("");

  const fetchData = async () => {
    const res = await fetch(`/api/product/${productId}`);
    const data = await res.json();
    console.log(data);

    if (res.status !== 200) {
      setError(data.errMsg);
    } else {
      setProduct(data);
    }
  };

  // At first render of this page, useRouter value which is productId might be null or something.

  // We need to prevent undefined value from entering the parameter value of api.

  // By insulting productId in dependency array of useEffect Hook, We can detect the change of the value itself. first, we check this value is 'undefined' or not. if the value is not a 'undefined',  then we can invoke function. Otherwise, productId value might be 'undefined' and will result in unappropriated behavior.

  useEffect(() => {
    if (!productId) {
      return;
    }
    fetchData();
  }, [productId]);

  return (
    <div>
      <UpperNav productName={product.productName} />
      {/* Upper Banner */}
      <div className="bg-[#1F3933]">
        <div className="flex items-center max-w-[1140px] mx-auto">
          <div className="flex-1">
            <img className="h-[400px]" src={product.productImg} alt="" />
          </div>
          <div className="flex-1">
            <h2 className="text-white font-bold text-5xl mb-4">
              {product.productName}
            </h2>
            <h3 className="text-gray-300 font-semibold text-3xl ">
              {product.calories} calories
            </h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto px-5 xl:px-0">
        <div className="grid grid-cols-2 my-12 gap-12">
          {/* left part */}
          <div className="">
            <div className="flex items-center space-x-2">
              <LocationMarkerIcon className="h-7 text-gray-600" />
              <span className="text-gray-600 text-xl">
                Select a store to view availability
              </span>
            </div>
            <div>
              <img src="/img/menu/customizations.png" alt="alternative img" />
            </div>
          </div>
          {/* right part */}
          <div className="space-y-10">
            {/* nutrition part */}
            <div>
              <h3 className="text-3xl font-medium mb-5">
                Nutrition Information
              </h3>
              <p className="text-lg text-gray-500 mb-5">
                Nutrition information is calculated based on our standard
                recipes. Only changing drink size will update this information.
                Other customizations will not.
              </p>

              <div>
                <h5 className="text-lg border-b-[6px]">
                  Serving Size 16 fl oz
                </h5>
                <ul className="mb-5">
                  <li className="border-b-2 py-2 font-extrabold text-xl">
                    Calories{" "}
                    <span className="font-normal">{product.calories}</span>
                  </li>
                  <li className="border-b-2 py-2 font-extrabold text-xl">
                    Total Fat{" "}
                    <span className="font-normal">{product.total_fat} g</span>
                  </li>
                  <li className="border-b-2 py-2 font-extrabold text-xl">
                    Cholesterol{" "}
                    <span className="font-normal">
                      {product.cholesterol} mg
                    </span>
                  </li>
                  <li className="border-b-2 py-2 font-extrabold text-xl">
                    Sodium{" "}
                    <span className="font-normal">{product.sodium} g</span>
                  </li>
                  <li className="border-b-2 py-2 font-extrabold text-xl">
                    Total Carbohydrates{" "}
                    <span className="font-normal">
                      {product.total_carbohydrates} g
                    </span>
                  </li>
                  <li className="border-b-2 py-2 font-extrabold text-xl">
                    Protein{" "}
                    <span className="font-normal">{product.protein} g</span>
                  </li>
                  <li className="border-b-2 py-2 font-extrabold text-xl">
                    Caffeine{" "}
                    <span className="font-normal">{product.caffeine} mg</span>
                  </li>
                </ul>

                <p className="text-lg text-gray-500">
                  * 2,000 calories a day is used for general nutrition advice,
                  but calorie needs vary.
                </p>
              </div>
            </div>
            {/* ingredients */}
            <div>
              <h3 className="text-3xl font-medium mb-5">Ingredients</h3>
              {/* tip : optional chaining */}
              {product.ingredients?.map((ingredient, index) => (
                <span key={index} className="font-extrabold text-lg">
                  {ingredient}
                </span>
              ))}
            </div>
            {/* Allergens */}
            <div className="space-y-5">
              <h3 className="text-3xl font-medium">Allergens</h3>
              <h4 className="text-xl">Not available for this item</h4>
              <p className="text-lg text-gray-500">
                We cannot guarantee that any unpackaged products served in our
                stores are allergen-free because we use shared equipment to
                store, prepare, and serve them. Customers with allergies can
                find ingredient information for products on the labels of our
                packaged products or online at Starbucks.com/menu.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Upper Banner */}
      <div className="bg-[#1F3933]">
        <div className="max-w-[1240px] mx-auto py-10 px-5 xl:px-0 space-y-5">
          <span className="text-yellow-500 px-2 py-[2px] border-2 border-yellow-500 rounded-md text-[16px] ">
            150 ★ item
          </span>
          <p className="max-w-[500px] text-gray-300 font-medium">
            Espresso shots topped with hot water create a light layer of crema
            culminating in this wonderfully rich cup with depth and nuance. Pro
            Tip: For an additional boost, ask your barista to try this with an
            extra shot.
          </p>
          <p className="text-white text-lg font-bold">
            15 calories, 0g sugar, 0g fat
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;

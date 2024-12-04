import React from "react";
import { useStore } from "../../store";

const Card = ({ data }) => {
  const { incrementCount, decrementCount } = useStore();
  return (
    <div className="">
      <div
        className={`relative w-[100%] ${
          data.count > 0 ? "border-4 border-red rounded-xl sm:border-4" : ""
        }`}
      >
        <div className="rounded-md overflow-hidden">
          <picture className="rounded-md">
            <source
              srcSet={data.image.mobile}
              media="(max-width: 640px)"
              className="rounded-md"
            />
            <source srcSet={data.image.desktop} media="(min-width: 641px)" />
            <img src={data.image.mobile} alt="add-to-cart" />
          </picture>
        </div>
        {!data.count || data.count === 0 ? (
          <div
            className="absolute bottom-[-5%] left-[50%] translate-x-[-50%] border-2 w-[50%] justify-center py-1 rounded-2xl flex gap-4 border-rose-400 bg-white"
            onClick={() => incrementCount(data.name)}
          >
            <img src="assets/images/icon-add-to-cart.svg" alt="add-to-cart" />
            <p className="text-xs text-rose-900 font-semibold">Add to cart</p>
          </div>
        ) : (
          <>
            <div className="absolute bottom-[-5%] left-[50%] translate-x-[-50%] border-2 w-[40%] justify-center rounded-2xl flex gap-4 border-red bg-red py-1">
              <button
                className="border-2 border-gray-500 flex justify-center items-center rounded-full w-6 h-6 border-white hover:bg-white text-white hover:text-red"
                onClick={() => decrementCount(data.name)}
              >
                <div>-</div>
              </button>
              <p className="text-sm text-white font-semibold">{data.count}</p>
              <button
                className="border-2 border-gray-500 flex justify-center items-center rounded-full w-6 h-6 border-white hover:bg-white text-white hover:text-red"
                onClick={() => incrementCount(data.name)}
              >
                <div>+</div>
              </button>
            </div>
          </>
        )}
      </div>
      <div className="py-8">
        <div className="font-thin text-xs">{data.category}</div>
        <p className="font-semibold text-md">{data.name}</p>
        <p className="font-semibold text-red">${data.price}</p>
      </div>
    </div>
  );
};

export default Card;

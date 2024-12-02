import React, { useEffect, useState } from "react";
import { useStore } from "../../store";

const ShoppingCard = ({ setOpen }) => {
  const data = useStore((state) => state.productData);
  const { removeItem } = useStore();
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (!data[0].tc || data[0].tc === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [data]);

  const total = () => {
    let tc = 0;
    data.forEach((item) => {
      if (item.count > 0) {
        tc = tc + item.count * item.price;
      }
    });
    return tc;
  };

  return (
    <div className="flex flex-col p-6 py-6 rounded-md shadow-sm">
      <p className="text-xl text-red font-bold">Your Cart({data[0].tc})</p>
      {empty ? (
        <div className="flex flex-col items-center justify-center w-[100%]">
          <img
            src="/assets/images/illustration-empty-cart.svg"
            className="w-[50%] py-4 mt-4"
          />
          <p className="text-md text-red font-medium">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <>
          {data.map((item) => (
            <>
              {item.count > 0 && (
                <div>
                  <div className="flex justify-between pt-6">
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-sm">
                        {" "}
                        <span className="text-red font-bold">
                          {item.count}x
                        </span>
                        <span className="pl-4 text-rose-400">
                          ${item.price}
                        </span>
                        <span className="pl-4 text-rose-900 font-semibold">
                          ${parseFloat(item.count * item.price)}
                        </span>
                      </p>
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => removeItem(item.name)}
                    >
                      <img
                        src="/assets/images/icon-remove-item.svg"
                        alt="close"
                        className="h-[100%]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </>
      )}
      {data[0].tc && data[0].tc > 1 && (
        <>
          <div className="my-4 border-t-[0.5px] border-rose-400 py-4">
            <div className="flex justify-between">
              <p className="text-lg">order total</p>
              <p className="text-xl font-bold">${total()}</p>
            </div>
          </div>
          <div className="py-4 bg-rose-100 flex justify-center space-x-4 w-['100%'] align-baseline rounded-md">
            <div>
              <img src="/assets/images/icon-carbon-neutral.svg" alt="cb" />
            </div>
            <p className="text-sm">This is carbon-neutral delivery</p>
          </div>
          <button
            className="my-4 text-xl text-white bg-red w-['100%'] rounded-full font-semibold py-2 cursor-pointer hover:bg-maroon"
            onClick={() => setOpen(true)}
          >
            Confirm order
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCard;

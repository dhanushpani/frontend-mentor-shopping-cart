import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { useStore } from "./store";
import ShoppingCard from "./components/ShoppingCard";

function App() {
  const data = useStore((state) => state.productData);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // console.log(data); // Logs only once when the component mounts
  }, [data]); // Runs only when `data` changes

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
    <div className={`relative ${open ? "max-h-[100vh] overflow-hidden" : ""}`}>
      <div className="font-custom py-[2%] px-[5%] bg-rose-50 min-h-screen relative">
        <div className="md:flex w-[100%]">
          <div className="sm:[100%] md:w-[70%]">
            <p className="font-bold text-3xl">title</p>
            <div className="md:grid grid-rows-3 grid-flow-col gap-4">
              {data.map((item, index) => (
                <Card data={item} i />
              ))}
            </div>
          </div>
          <div className="md:w-[30%] bg-white h-fit">
            <ShoppingCard setOpen={setOpen} />
          </div>
        </div>
      </div>
      {open && (
        <div
          className={`absolute backdrop-blur-sm h-100vh z-10 w-[100%] max-h-[100vh] overflow-y-hidden h-[100%] top-0 bottom-0 flex justify-center md:items-center items-end`}
        >
          <div className="bg-white md:min-w-[40%] min-w-[100%] rounded-md px-4 py-2 ">
            <img src="/assets/images/icon-order-confirmed.svg" alt="tick" className="py-4"/>
            <p className="text-2xl font-bold pt-4">Order Confirmed</p>
            <p className="text-sm text-rose-500">
              We Hope you enjoyed your food
            </p>
            <div className="bg-rose-100 py-4 px-2 my-2 h-[40vh] overflow-x-auto rounded-md">
              {data.map(
                (item) =>
                  item.count > 0 && (
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src={item.image.thumbnail}
                          alt="thumbnail"
                          className="rounded-md"
                        />
                        <div className="pl-2">
                          <p className="font-semibold text-md">{item.name}</p>
                          <p className="text-sm pt-2">
                            <span className="text-red font-bold">
                              {item.count}x
                            </span>
                            <span className="pl-4 text-rose-400">
                              ${item.price}
                            </span>
                            {/* <span className="pl-4 text-rose-900 font-semibold">
                              ${parseFloat(item.count * item.price)}
                            </span> */}
                          </p>
                        </div>
                      </div>
                      <p className="font-semibold text-lg"> ${parseFloat(item.count * item.price)}</p>
                    </div>
                  )
              )}
            </div>
            <div className="my-4 border-t-[0.5px] border-rose-400 py-4">
              <div className="flex justify-between">
                <p className="text-lg">order total</p>
                <p className="text-xl font-bold">${total()}</p>
              </div>
            </div>
            <div className="w-[100%]">
              <button
                className="my-4 text-xl text-white bg-red w-[100%] rounded-full  font-semibold py-2 cursor-pointer hover:bg-maroon"
                onClick={() => {
                  setOpen(false);
                  window.location.reload();
                }}
              >
                Start New Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState("");

  const fetchData = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    const details = data.data;
    setProducts(details);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="w-full h-full bg-gray-900 text-white">
        <h1 className="text-center text-5xl font-semibold py-4">Al Products</h1>
      </div>
      <div className="w-full h-full bg-gray-500 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10">
            {products &&
              products.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-slate-900 py-2 text-white flex flex-col justify-center items-center rounded-md "
                  >
                    <img
                      className="w-56 h-56 p-4 rounded-md"
                      src={item.image}
                      alt=""
                    />
                    <h1>{item.title.substring(0, 20)}</h1>
                    <p>${item.price}</p>
                    <div className="flex gap-4">
                      <button className="px-2 py-1 bg-white text-slate-900 rounded-md">
                        Add to Cart
                      </button>
                      <button className="px-2 py-1 bg-white text-slate-900 rounded-md">
                        Buy
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

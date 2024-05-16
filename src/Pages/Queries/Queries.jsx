import { useLoaderData } from "react-router-dom";
import QueriesCard from "./QueriesCard";
import { useState } from "react";

const Queries = () => {
  const products = useLoaderData();
  const [layout, setLayout] = useState("grid"); // Initial layout

  const toggleLayout = () => {
    setLayout((prevLayout) => (prevLayout === "grid" ? "flex" : "grid")); // Toggle between 'grid' and 'flex'
  };
  return (
    <div>
      <div className="text-center mt-10">
        <button
          onClick={toggleLayout}
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {layout === "grid" ? "Switch to Flex" : "Switch to Grid"}
        </button>
      </div>

      <div className={`grid lg:grid-cols-3 gap-4 ${layout === 'grid' ? 'md:grid-cols-2' : 'md:flex md:flex-wrap'}`}>
        {products.length < 0 ? (
          <p>Not found. Please add queries</p>
        ) : (
          products.map((product) => (
            <QueriesCard key={product._id} query={product}></QueriesCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Queries;

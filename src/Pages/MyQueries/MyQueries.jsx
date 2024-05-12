import { useLoaderData } from "react-router-dom";
import AddQueryBanner from "./AddQueriesBanner";
import QueryCard from "./QueryCard";

const MyQueries = () => {
  const products = useLoaderData();

  return (
    <div>
      <AddQueryBanner></AddQueryBanner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12">
        {   
            products.length<0 ? <p>Not found. Please add queries</p> :
            products.map(product => <QueryCard key={product.id} query={product}></QueryCard>)
        }

     
      </div>
    </div>
  );
};

export default MyQueries;

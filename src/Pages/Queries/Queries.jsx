import { useLoaderData } from "react-router-dom";
import QueryCard from "../MyQueries/QueryCard";


const Queries = () => {
    const products = useLoaderData();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12">
        {   
            products.length<0 ? <p>Not found. Please add queries</p> :
            products.map(product => <QueryCard key={product._id} query={product}></QueryCard>)
        }

     
      </div>
        </div>
    );
};

export default Queries;
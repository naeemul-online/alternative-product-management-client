import AddQueryBanner from "./AddQueriesBanner";
import QueryCard from "./QueryCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const MyQueries = () => {
  const {user} = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    
    getData();
    
  }, [user])

  const getData = async() =>{
    const {data} = await axios(`${import.meta.env.VITE_API_URL}/products/${user.email}`)
    // console.log(data)
    setProducts(data)
}


  return (
    <div>
      <AddQueryBanner></AddQueryBanner>
      <h2>Product length: {products.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12">
        {   
            products.length<0 ? <p>Not found. Please add queries</p> :
            products.map(product => <QueryCard key={product._id} query={product} getData={getData}></QueryCard>)
        }

     
      </div>
    </div>
  );
};

export default MyQueries;

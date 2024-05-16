import AddQueryBanner from "./AddQueriesBanner";
import QueryCard from "./QueryCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyQueries = () => {
  const {user} = useContext(AuthContext);
  const [products, setProducts] = useState([]);



  useEffect(()=> {
    
    getData();
    
  }, [user])


  const getData = async() =>{
    const {data} = await axios(`${import.meta.env.VITE_API_URL}/products/${user.email}`, {withCredentials: true})
    // console.log(data)
    setProducts(data)
}

const handleDelete = async (id) => {

    console.log("delete", id)

      // Ask for confirmation before deleting
  const confirmDelete = window.confirm('Are you sure you want to delete this query?');

  if (!confirmDelete) {
    return; // If the user cancels, do nothing
  }

  
    try {
        const{data} = await axios.delete(`${import.meta.env.VITE_API_URL}/product/${id}`)
        console.log(data)
        toast.success('Delete successfully')
        getData();
    } catch (err){
        // console.log(err.message);
        toast.error(err.message)
    }

  }

  return (
    <div>
      <AddQueryBanner></AddQueryBanner>
     
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12">
        {   
            products.length === 0 ? <p>Queries Not found. Please <Link to="/add-queries"><button className="btn">Add queries</button></Link> </p> :
            products.map(product => <QueryCard key={product._id} query={product} getData={handleDelete}></QueryCard>)
        }

     
      </div>
    </div>
  );
};

export default MyQueries;

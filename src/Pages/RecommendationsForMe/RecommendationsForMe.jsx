import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const RecommendationsForMe = () => {
    const {user} = useContext(AuthContext)
    const [recommends, setRecommends] = useState([]);

    useEffect(() => {
        const getRecommends = async () => {
          const { data } = await axios(
            `${import.meta.env.VITE_API_URL}/recommendForMe/${user?.email}`
          );
          // console.log(data)
          setRecommends(data);
        };
        getRecommends();
      }, [user]);
     


          
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Products: {recommends.length}</th>
              <th>Recommendation Reason</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
              recommends.map(p => <tr key={p._id}>   
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={p.productImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm opacity-50">{p.productName}</div>
                        <div className="font-bold">{p.queryTitle}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {p.recommendationReason}
                    <br/>
                  </td>
                  <th>
                    <button className="btn btn-warning btn-xs">Delete</button>
                  </th>      
                </tr> )
          }    
          </tbody>
          {/* foot */}
         
          
        </table>
      </div>
    );
};

export default RecommendationsForMe;
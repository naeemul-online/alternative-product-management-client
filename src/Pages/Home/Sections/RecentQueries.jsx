import axios from "axios";
import { useEffect, useState } from "react";

import QueriesCard from "../../Queries/QueriesCard";

const RecentQueries = () => {
  const [recentQueries, setRecentQueries] = useState([]);
  useEffect(() => {
    const getRecentQueries = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/products`);
      // console.log(data)
      setRecentQueries(data);
    };

    getRecentQueries();
  }, []);
  //   console.log(recentQueries)

  return (
    <div className="bg-gray-200 py-8">
      <h2 className="text-3xl text-center font-bold my-6  md:my-12">Recent Queries</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12">
        {recentQueries.length < 0 ? (
          <p>Not found. Please add queries</p>
        ) : (
          recentQueries
            .slice(0, 6)
            .map((product) => (
              <QueriesCard key={product._id} query={product}></QueriesCard>
            ))
        )}
      </div>
    </div>
  );
};

export default RecentQueries;

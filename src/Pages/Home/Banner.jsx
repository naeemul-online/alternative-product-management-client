import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-gray-200 p-4 text-center py-12">
      <h2 className="text-2xl font-semibold mb-4 text-center py-8">
        Explore Alternative Products
      </h2>
      <Link to="/queries">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          View All Queries
        </button>
      </Link>
    </div>
  );
};

export default Banner;

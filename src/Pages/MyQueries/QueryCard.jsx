
import { Link } from 'react-router-dom';

const QueryCard = ({ query }) => {
  const { productName, productBrand, imageUrl, queryTitle, boycottingReason, recommendationCount } = query;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={productName} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{productName}</h3>
        <p className="text-gray-600 mb-2">Brand: {productBrand}</p>
        <p className="text-gray-700 mb-4">{queryTitle}</p>
        <p className="text-gray-700 mb-4">{boycottingReason}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-600">Recommendation Count: {recommendationCount}</span>
          </div>
          <div className="flex space-x-2">
            <Link to={`/query/${query.id}`} className="text-blue-600 hover:underline">
              View Details
            </Link>
            <Link to={`/query/${query.id}/update`} className="text-green-600 hover:underline">
              Update
            </Link>
            <button className="text-red-600 hover:underline" onClick={() => handleDelete(query.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;

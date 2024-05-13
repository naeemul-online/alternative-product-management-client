// import axios from 'axios';
import PropTypes from 'prop-types'; // ES6
// import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const QueryCard = ({ query, getData }) => {    
  const { productName, productBrand, imageUrl, queryTitle, boycottingReason, recommendationCount, _id } = query;
//   console.log(getData)


 
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
            <Link to={`/update/${_id}`} className="text-green-600 hover:underline">
              Update
            </Link>
            <button className="text-red-600 hover:underline" onClick={() => getData(_id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

QueryCard.propTypes = {
    query: PropTypes.object,
    getData: PropTypes.func
  };


export default QueryCard;


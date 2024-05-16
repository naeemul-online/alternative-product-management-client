
import { Link } from 'react-router-dom';

const LatestDeals = () => {
  // Example data for latest deals
  const latestDeals = [
    {
      id: 1,
      productName: 'Smartwatch',
      productImage: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjRVcCtARVV4wGkXDrT9yuelx1CFXHNHsVR88k2_5Bcj3KKIL484do-SBr9x8V',
      price: '$199',
      discount: 'Save $50',
    },
    {
      id: 2,
      productName: 'Wireless Earbuds',
      productImage: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzAwsffYDyaztHGYt7c16HYFYOye6Z3Z_d9pvgy3iCBysSSwkg9C77LDZl26m4',
      price: '$79',
      discount: 'Limited Time Offer',
    },
    {
      id: 3,
      productName: 'Gaming Console',
      productImage: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWoMapTWYUV0TF9zM-8UvmqFOR4BgI9sRJEXFbcm1M-u6Lyg1lxJOqUREsPixk',
      price: '$299',
      discount: 'Special Deal',
    },
  ];

  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center py-8">Latest Deals</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {latestDeals.map((deal) => (
            <div key={deal.id} className="bg-white query-card border shadow-md p-4 rounded-xl flex flex-col flex-1 justify-between">
              <img src={deal.productImage} alt={deal.productName} className="w-full h-32 object-cover mb-4" />
              <h3 className="text-lg font-semibold mb-2">{deal.productName}</h3>
              <p className="text-gray-600 mb-2">Price: <span className="line-through">{deal.price}</span></p>
              <p className="text-green-500 font-semibold mb-4">{deal.discount}</p>
              <Link to={`/product-details/${deal.id}`} className="text-blue-500 hover:underline">View Deal</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestDeals;

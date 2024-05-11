
import { Link } from 'react-router-dom';

const LatestDeals = () => {
  // Example data for latest deals
  const latestDeals = [
    {
      id: 1,
      productName: 'Smartwatch',
      productImage: 'smartwatch.jpg',
      price: '$199',
      discount: 'Save $50',
    },
    {
      id: 2,
      productName: 'Wireless Earbuds',
      productImage: 'earbuds.jpg',
      price: '$79',
      discount: 'Limited Time Offer',
    },
    {
      id: 3,
      productName: 'Gaming Console',
      productImage: 'console.jpg',
      price: '$299',
      discount: 'Special Deal',
    },
  ];

  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center py-8">Latest Deals</h2>
        <div className="grid grid-cols-3 gap-4">
          {latestDeals.map((deal) => (
            <div key={deal.id} className="bg-white p-4 shadow-md rounded-lg">
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

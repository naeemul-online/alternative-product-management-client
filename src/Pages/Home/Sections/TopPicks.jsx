
import { Link } from 'react-router-dom';

const TopPicks = () => {
  // Example data for top picks
  const topPicks = [
    {
      id: 1,
      productName: 'Smartphone',
      productImage: 'smartphone.jpg',
      description: 'The latest smartphone with advanced features and high-quality camera.',
    },
    {
      id: 2,
      productName: 'Laptop',
      productImage: 'laptop.jpg',
      description: 'Powerful laptop with fast performance and sleek design.',
    },
    {
      id: 3,
      productName: 'Headphones',
      productImage: 'headphones.jpg',
      description: 'Premium headphones with noise-cancellation and superior sound quality.',
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center p-8">Top Picks</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {topPicks.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
              <img src={product.productImage} alt={product.productName} className="w-full h-32 object-cover mb-4" />
              <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Link to={`/product-details/${product.id}`} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPicks;

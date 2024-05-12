
import { Link } from 'react-router-dom';

const AddQueryBanner = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-6">
            <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
                <h2 className="text-white text-2xl font-semibold">Add Query</h2>
                <Link to="/add-queries" className="bg-white text-blue-600 py-2 px-6 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out">Add Queries</Link>
            </div>
        </div>
    );
}

export default AddQueryBanner;

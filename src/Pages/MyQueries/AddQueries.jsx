import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider";
import axios from 'axios';
import toast from "react-hot-toast";

const AddQueries = () => {
  const { user } = useContext(AuthContext);
//   console.log(user);
  const [startDate, setStartDate] = useState(new Date());
//   const [recommendationCount, setRecommendationCount] = useState()
//   console.log(startDate);
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target
    const productName = form.productName.value
    const productBrand = form.productBrand.value
    const queryTitle = form.queryTitle.value
    const boycottingReason = form.boycottingReason.value
    const currentDate = startDate
    
    const formData = {
      productName,
      productBrand,
      queryTitle,
      boycottingReason,
      currentDate,
    //   recommendationCount,
      
      user: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL
      }
    };

    try {
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-queries`, formData  )
        console.log(data)
        toast.success('Queries added successfully')
       
        form.reset()
    } catch (err){
        console.log(err)
    }
    // Here you can send the form data to your server
    // console.log(formData);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Add Query</h2>
      <div>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto md:grid  md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-md"
        >
          {/* form input */}
          <div>
            <div className="mb-4">
              <label
                htmlFor="productName"
                className="block text-sm font-medium text-gray-700"
              >
                Product Name:
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="productBrand"
                className="block text-sm font-medium text-gray-700"
              >
                Product Brand:
              </label>
              <input
                type="text"
                id="productBrand"
                name="productBrand"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="productImage"
                className="block text-sm font-medium text-gray-700"
              >
                Product Image-URL:
              </label>
              <input
                type="url"
                id="productImage"
                name="productImage"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="queryTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Query Title:
              </label>
              <input
                type="text"
                id="queryTitle"
                name="queryTitle"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="boycottingReason"
                className="block text-sm font-medium text-gray-700"
              >
                Boycotting Reason:
              </label>
              <textarea
                id="boycottingReason"
                name="boycottingReason"
                rows="4"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border"
                required
              ></textarea>
            </div>
          </div>

          {/* user info */}

          <div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                User Email:
              </label>
              <input
                disabled
                type="email"
                id="email"
                name="email"
                defaultValue={user?.email}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                disabled
                type="text"
                id="name"
                name="name"
                defaultValue={user?.displayName}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Image:
              </label>
              <input
                type="text"
                disabled
                id="image"
                name="image"
                defaultValue={user?.photoURL}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border"
                accept="image/*"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="queryTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Date and Time:
              </label>
              <DatePicker
              
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className="text-center col-span-2">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 w-full  text-white rounded-md"
            >
              Add Queries
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQueries;

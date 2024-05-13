import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateQueries = () => {
  const product = useLoaderData();
  const { user} = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date() || new Date());
  const navigate = useNavigate();
  // console.log(product)
  const {
    productName,
    productBrand,
    productImage,
    queryTitle,
    boycottingReason,
    _id
  } = product;
  console.log(_id)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const productImage = form.productImage.value;
    
    const queryTitle = form.queryTitle.value;
    const boycottingReason = form.boycottingReason.value;
    const currentDate = startDate;

    const formData = {
      productName,
      productBrand,
      productImage,
      queryTitle,
      boycottingReason,
      currentDate,
      user: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/update/${_id}`,
        formData
      );
      console.log(data);
      toast.success("Queries updated successfully");
      navigate("/my-queries");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    // Here you can send the form data to your server
    // console.log(formData);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Update Query</h2>
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
              defaultValue={productName}
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
              defaultValue={productBrand}
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
                defaultValue={productImage}
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
              defaultValue={queryTitle}
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
              defaultValue={boycottingReason}
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
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
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
              Update Queries
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateQueries;

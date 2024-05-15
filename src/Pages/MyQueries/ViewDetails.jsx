import {  useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import { AuthContext } from "../../provider/AuthProvider";


const ViewDetails = () => {
  const {user} = useContext(AuthContext)
  console.log(user)   
  const data = useLoaderData();
  console.log(data)  
  const [startDate, setStartDate] = useState(new Date());
  const {
    _id,
    productName,
    productBrand,
    imageUrl,
    queryTitle,
    boycottingReason,
    recommendationCount,
    currentDate,
    
  } = data || {}



  const handleAddRecommendation = async (e) => {
    e.preventDefault();
    console.log('clicked')
    const form = e.target;
    const queryId = _id;
    const queryTitle = form.recommendTitle.value;
    const productName = form.productName.value;
    const productImage = form.productImage.value;
    const recommendationReason = form.recommendationReason.value; 
    const  userEmail = data?.user?.email;
    const userName = data?.user?.name;
    const recommenderEmail = user?.email;
    const recommenderName = user?.displayName;
    const currentTimeStamp = startDate;
  

    const formData = {
      queryId,
      queryTitle,
      productName,
      productImage,
      recommendationReason, 
      userEmail,
      userName,
      recommenderEmail,
      recommenderName,
      currentTimeStamp
    };

    console.log(formData);

    // try {
    //     const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-queries`, formData  )
    //     console.log(data)
    //     toast.success('Queries added successfully')
    //     navigate('/my-queries')
    // } catch (err){
    //     console.log(err)
    // }
    // Here you can send the form data to your server
    // console.log(formData);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="border m-4 p-4">
        <img
          className="w-full h-48 object-cover"
          src={imageUrl}
          alt={productName}
        />
        <p className="text-gray-700 mb-4">{queryTitle}</p>
        <h3 className="text-xl font-semibold mb-2">{productName}</h3>
        <p className="text-gray-600 mb-2">Brand: {productBrand}</p>
        <p className="text-gray-700 mb-4">{boycottingReason}</p>
        <p className="text-gray-700 mb-4">{currentDate}</p>
        <p>
          <span className="font-bold">Date Posted:</span> {currentDate}
        </p>
        <div>
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={user?.photo} />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {user?.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {user?.email}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <p>Recommendations: {recommendationCount}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4">
        {/* recommendation form */}
        <h2 className="text-center text-3xl font-bold">
          Add Recommendation form
        </h2>
        {/* User profile */}

        <form
          onSubmit={handleAddRecommendation}
          className="  md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-md"
        >
          {/* form input */}
            <div className="mb-4">
              <label
                htmlFor="recommendTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Recommend Title:
              </label>
              <input
                type="text"
                id="recommendTitle"
                name="recommendTitle"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border"
                required
              />
            </div>
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
            <div className="mb-4 col-span-2">
              <label
                htmlFor="recommendationReason"
                className="block text-sm font-medium text-gray-700"
              >
                Recommendation Reason:
              </label>
              <textarea
                id="recommendationReason"
                name="recommendationReason"
                rows="4"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 border"
                required
              ></textarea>
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

          {/* user info */}

          <div className="text-center col-span-2">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 w-full  text-white rounded-md"
            >
              Add Recommendation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewDetails;

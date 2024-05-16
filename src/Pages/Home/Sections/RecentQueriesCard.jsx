import PropTypes from "prop-types"; // ES6

const RecentQueriesCard = ({ query }) => {
  // console.log(query)
  const {
    productName,
    productBrand,
    imageUrl,
    queryTitle,
    boycottingReason,
    currentDate,
    user,
  } = query;

  return (
    <div className=" bg-white query-card border shadow-md p-4 rounded-xl flex flex-col flex-1 justify-between">
      <div className="query-card-column flex items-center justify-center">
        <img src={imageUrl} alt="Product" className="product-image" />
      </div>
      <div className="query-card-column">
        <h2 className="font-bold">Query Title:{queryTitle}</h2>
        <p>
          <span className="font-bold">Product:</span> {productName}
        </p>
        <p>
          <span className="font-bold">Brand</span>: {productBrand}
        </p>
        <p>
          <span className="font-bold">Alternation Reason:</span>{" "}
          {boycottingReason}
        </p>
        <p>
          <span className="font-bold">Date Posted:</span>{" "}
          {new Date(currentDate).toLocaleDateString()}
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
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default RecentQueriesCard;
RecentQueriesCard.propTypes = {
  query: PropTypes.object,
};

import { useDispatch, useSelector } from "react-redux";
import { setFilter, setQuery, setSort } from "../../redux/products/ProductSlice";

function ProductFilter() {
  const dispatch = useDispatch();
  const { query, categories } = useSelector((state) => state.products);

  // Handle limit changes
  function handleLimit(limit) {
    dispatch(setQuery({ ...query, limit }));
    console.log(limit);
  }

  // Handle sorting changes
  function handleSorting(sort) {
    dispatch(setSort(sort));
  }

  // Filter by name
  function filterByName(value) {
    dispatch(setFilter({ name: value }));
  }

  // Filter by category
  function filterByCategory(value) {
    // Set category filter in Redux state
    dispatch(setFilter({ category: value }));
  }

  return (
    <div className="bg-white mb-8 mx-8 px-4 py-3 rounded-md drop-shadow-md grid items-center grid-cols-4 justify-between">
      {/* Name Filter */}
      <div className="flex gap-2 text-md">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="bg-slate-100 rounded-md focus:outline-none px-2 py-1"
          value={query?.filters?.name || ""}
          onChange={(e) => filterByName(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="flex gap-2">
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          id="category"
          className="px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-900 focus:border-transparent"
          onChange={(e) => filterByCategory(e.target.value)}
          value={query?.category || "All"} // Update the selected value here
        >
          <option value="All">All</option> {/* Default "All" option */}
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Sorting Options */}
      <div className="flex items-center gap-4 p-2 bg-white rounded-md">
        <label htmlFor="sort" className="text-gray-700 font-medium">Sort By:</label>
        <select
          name="sort"
          id="sort"
          className="px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-900 focus:border-transparent"
          onChange={(e) => handleSorting(e.target.value)}
          value={query?.sort}
        >
          <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
          <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
          <option value={JSON.stringify({ price: 1 })}>Price: Low to High</option>
          <option value={JSON.stringify({ price: -1 })}>Price: High to Low</option>
        </select>
      </div>

      {/* Limit Options */}
      <div className="flex items-center gap-4 p-2 bg-white rounded-md">
        <label htmlFor="limit" className="text-gray-700 font-medium">Limit:</label>
        <select
          name="limit"
          id="limit"
          className="px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-900 focus:border-transparent"
          onChange={(e) => handleLimit(e.target.value)}
          value={query?.limit}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}

export default ProductFilter;

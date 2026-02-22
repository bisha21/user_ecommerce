import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '@/redux/products/ProductSlice';
import useDebounce from '@/hooks/useDebounce';

const Search = () => {
  const { query } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Initialize with current filter value or empty string
  const [searchText, setSearchText] = useState(query?.filters?.name || '');
  const debouncedSearch = useDebounce(searchText, 400);

  // Update Redux only when debounced value changes and is different from current
  useEffect(() => {
    if (debouncedSearch !== query?.filters?.name) {
      dispatch(setFilter({ name: debouncedSearch }));
    }
  }, [debouncedSearch, dispatch, query?.filters?.name]);

  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="mt-5 sm:flex sm:items-center">
          <input
            id="search-input"
            name="search"
            type="search"
            placeholder="Search products..."
            className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            aria-label="Search products"
          />

          {/* Optional: Clear button */}
          {searchText && (
            <button
              type="button"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setSearchText('')}
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

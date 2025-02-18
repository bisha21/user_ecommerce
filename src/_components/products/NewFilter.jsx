import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  resetQuery,
  setFilter,
  setQuery,
  setSort,
} from '@/redux/products/ProductSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const filterData = [
  {
    filterType: 'Category',
    key: 'category',
    array: ['Man', 'Women', 'Kids'],
  },
  {
    filterType: 'Limit',
    key: 'limit',
    array: [10, 20, 50, 100],
  },
];

const FilterProduct = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.products);

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (value, filterKey) => {
    setSelectedValue(value);

    if (filterKey === 'limit') {
      dispatch(setQuery({ limit: parseInt(value, 10) }));
    } else {
      dispatch(setFilter({ [filterKey]: value }));
    }
  };

  const handleReset = () => {
    dispatch(resetQuery());
    setSelectedValue('');
  };

  function handleSorting(sort) {
    dispatch(setSort(sort));
  }

  return (
    <div className="w-full p-3 rounded-md bg-teal-100/30">
      <h1 className="font-bold text-lg">Filter Product</h1>
      <button
        onClick={handleReset}
        className="bg-teal-600 text-white px-3 py-1 rounded-md mt-3"
      >
        Reset Filters
      </button>
      <hr className="mt-3" />

      {filterData.map((data, index) => (
        <div key={index}>
          <h1 className="font-bold text-lg">{data.filterType}</h1>
          <RadioGroup
            onValueChange={(value) => handleChange(value, data.key)}
            value={selectedValue}
          >
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div className="flex items-center space-x-2 my-2" key={idx}>
                  {/* Ensure the checked state affects text color */}
                  <RadioGroupItem value={String(item)} id={itemId} className="peer" />
                  <Label htmlFor={itemId} className="peer-checked:text-black">
                    {item}
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
      ))}

      <div className="flex items-starts gap-4 p-2 bg-teal-100/50 rounded-md flex-col">
        <label htmlFor="sort" className="text-black font-bold text-lg">
          Sort By:
        </label>
        <select
          name="sort"
          id="sort"
          className="px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-900 focus:border-transparent"
          onChange={(e) => handleSorting(e.target.value)}
          value={query?.sort || JSON.stringify({ createdAt: -1 })}
        >
          <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
          <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
          <option value={JSON.stringify({ price: 1 })}>
            Price: Low to High
          </option>
          <option value={JSON.stringify({ price: -1 })}>
            Price: High to Low
          </option>
        </select>
      </div>
    </div>
  );
};

export default FilterProduct;

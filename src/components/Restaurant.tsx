import { Restaurants } from '../types/filterableProductTable';
import FilterableTable from './common/FilterableTable';
import SearchBar from './SearchBar';
import FilterCategoryButtonGroup from './FilterCategoryButtonGroup';
import RestaurantTable from './RestaurantTable';

type FilterableRestaurantProps = {
  data: Restaurants[]
}

function Restaurant({ data }:FilterableRestaurantProps) {
  return (
    <div className="restaurants">
      <FilterableTable>
        <FilterableTable.Toolbar toolbar={(
          <>
            <SearchBar />
            <FilterCategoryButtonGroup />
          </>
        )}
        />
        <FilterableTable.View view={<RestaurantTable restaurants={data} />} />
      </FilterableTable>
    </div>
  );
}

export default Restaurant;

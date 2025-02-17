import FilterGenre from './filter-genre/filter-genre';
import FilterLevel from './filter-level/filter-level';


export default function FilterGroup(): JSX.Element {
  return (
    <form className='filter' action='#' method='get'>
      <FilterGenre/>
      <FilterLevel />
    </form>
  );
}


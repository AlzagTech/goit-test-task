import { useSelector, useDispatch } from 'react-redux';

import { statusFilters } from 'redux/constats';
import { selectStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filtersSlice';

import { Button } from 'components/Button/Button';
import { FiltersBox } from './StatusFilter.styled';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <FiltersBox>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        Show all
      </Button>
      <Button
        selected={filter === statusFilters.follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
      >
        Follow
      </Button>
      <Button
        selected={filter === statusFilters.followings}
        onClick={() => handleFilterChange(statusFilters.followings)}
      >
        Followings
      </Button>
    </FiltersBox>
  );
};

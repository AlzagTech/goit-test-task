import { useDispatch } from 'react-redux';

import { statusFilters } from 'redux/constats';
import { setStatusFilter } from 'redux/filtersSlice';

import { Button } from 'components/Button/Button';
import { FiltersBox } from './StatusFilter.styled';

export const StatusFilter = ({ onClick }) => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => {
    dispatch(setStatusFilter(filter));
    onClick();
  };

  return (
    <FiltersBox>
      <Button onClick={() => handleFilterChange(statusFilters.all)}>
        Show all
      </Button>
      <Button onClick={() => handleFilterChange(statusFilters.follow)}>
        Follow
      </Button>
      <Button onClick={() => handleFilterChange(statusFilters.followings)}>
        Followings
      </Button>
    </FiltersBox>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import { UsersList } from '../components/UsersList/UsersList';
import { StatusFilter } from '../components/StatusFilter/StatusFilter';
import { Loader } from '../components/Loader/Loader';
import { Layout } from 'components/Layout/Layout';
import { Button } from 'components/Button/Button';

export const Tweets = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const isSavedUsers = localStorage.getItem('persist:users');

    if (!isSavedUsers) {
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  return (
    <Layout>
      <Link to="/">
        <Button>⬅ Back</Button>
      </Link>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <>
          <StatusFilter />
          <UsersList />
        </>
      )}
      {error && <p>Something went wrong... </p>}
    </Layout>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleUsers,
} from 'redux/selectors';

import { UsersList } from '../components/UsersList/UsersList';
import { StatusFilter } from '../components/StatusFilter/StatusFilter';
import { Loader } from '../components/Loader/Loader';
import { Layout } from 'components/Layout/Layout';
import { Button } from 'components/Button/Button';
import { TextBox } from 'components/TextBox/TextBox';
import { BtnBox } from 'components/Button/Button.styled';

export const Tweets = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const users = useSelector(selectVisibleUsers);

  const tweetsPerPage = 3;

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    const isSavedUsers = localStorage.getItem('persist:users');

    if (!isSavedUsers) {
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  useEffect(() => {
    setTotalPages(Math.ceil(users.length / tweetsPerPage));

    setVisibleData([...users.slice(0, tweetsPerPage * page)]);
  }, [users, page]);

  const selectUsers = page => {
    let selectedUsers = [];

    for (
      let i = (page - 1) * tweetsPerPage;
      i < page * tweetsPerPage && i < users.length;
      i++
    ) {
      selectedUsers.push(users[i]);
    }

    return selectedUsers;
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setVisibleData(prevData => [...prevData, ...selectUsers(nextPage)]);
  };

  const handleFilterClick = () => {
    setPage(1);
  };

  return (
    <Layout>
      <Link to="/">
        <Button>&#10229; Back</Button>
      </Link>
      {isLoading && (
        <TextBox>
          <Loader />
        </TextBox>
      )}
      {!isLoading && !error && (
        <>
          <StatusFilter onClick={handleFilterClick} />
          <UsersList users={visibleData} />
          {page < totalPages && users.length > 0 && (
            <BtnBox>
              <Button onClick={handleLoadMore}>Load more</Button>
            </BtnBox>
          )}
        </>
      )}
      {error && (
        <TextBox>
          <p>Something went wrong... </p>
        </TextBox>
      )}
    </Layout>
  );
};

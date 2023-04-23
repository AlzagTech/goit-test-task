import { useSelector } from 'react-redux';
import { selectVisibleUsers } from 'redux/selectors';

import { UsersListItem } from 'components/UsersListItem/UsersListItem';
import { CardsList } from './UsersList.styled';

export const UsersList = () => {
  const users = useSelector(selectVisibleUsers);

  return (
    <CardsList>
      {users.map(user => (
        <li key={user.id}>
          <UsersListItem user={user} />
        </li>
      ))}
    </CardsList>
  );
};

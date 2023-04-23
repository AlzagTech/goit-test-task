import { UsersListItem } from 'components/UsersListItem/UsersListItem';
import { CardsList } from './UsersList.styled';

export const UsersList = ({ users }) => {
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

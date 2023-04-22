import { CardListItem } from './CardListItem/CardListItem';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardListItem />
    </div>
  );
};

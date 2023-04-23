import React from 'react';
import { Link } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { Button } from 'components/Button/Button';
import { TextBox } from 'components/TextBox/TextBox';

export const Home = () => {
  return (
    <Layout>
      <TextBox>
        <p>Tweets welcome page 👋</p>
        <Link to="/tweets">
          <Button>Go to tweets</Button>
        </Link>
      </TextBox>
    </Layout>
  );
};

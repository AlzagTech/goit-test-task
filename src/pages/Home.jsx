import React from 'react';
import { Link } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { Button } from 'components/Button/Button';
import { MailBox } from 'components/MailBox/MailBox';

export const Home = () => {
  return (
    <Layout>
      <MailBox>
        <p>Tweets welcome page 👋</p>
        <Link to="/tweets">
          <Button>Go to tweets</Button>
        </Link>
      </MailBox>
    </Layout>
  );
};

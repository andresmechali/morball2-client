import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'antd';

import PageTitle from 'components/PageTitle';
import Game from 'components/Game';

import Form from './form';

const Page = () => {
  const [username, setUsername] = useState('Andres');
  const { t } = useTranslation();

  const onChooseUsername = value => {
    setUsername(value);
  };

  return (
    <div>
      <PageTitle title={t('home.title')} />
      <Card style={{ marginBottom: '16px' }}>{t('home.content')}</Card>
      <div>
        {username ? (
          <Game username={username} />
        ) : (
          <Card>
            <Form onChooseUsername={onChooseUsername} />
          </Card>
        )}
      </div>
    </div>
  );
};

export default Page;

import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

// import sampleProfile from '../../assets/images/Profile picture.png';
import { styles } from './styles';
import { useAuthorization } from '../../hooks/useAuthorization';
import { createChallenge } from '../../db/createChallenge';
import MyLoader from '../MyLoader/MyLoader';

const UserCard = ({ score, username, avatar, place, email }) => {
  const user = useAuthorization();
  if (!user) return <MyLoader />;
  return (
    <Card
      style={{
        width: '100%'
      }}
    >
      <Card.Content>
        <Card.Header style={styles.header}>
          {place}
          <Image style={styles.image} avatar size="large" src={avatar} />
          {username}
          <span style={styles.scoreSection}>
            {username !== user?.username && (
              <Icon
                name="exclamation"
                size="small"
                color={'red'}
                circular
                onClick={() => createChallenge(user, email)}
              />
            )}
            &nbsp;
            <Icon name="star" color={'yellow'} />
            {score}
          </span>
        </Card.Header>
      </Card.Content>
    </Card>
  );
};
// onClick={}
UserCard.defaultProps = {
  username: 'Steve Sanders',
  text: 'Placeholder text',
  score: 666
};

export default UserCard;

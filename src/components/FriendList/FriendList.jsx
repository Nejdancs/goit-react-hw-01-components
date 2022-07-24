import PropTypes from 'prop-types';
import { Friends } from './FriendList.styled';
import { FriendListItem } from 'components';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

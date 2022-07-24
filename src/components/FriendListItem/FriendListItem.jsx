import PropTypes from 'prop-types';
import {
  FriendItem,
  AvatarWrapper,
  Name,
  Images,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <AvatarWrapper isOnline={isOnline}>
        <Images src={avatar} alt={`${name} avatar`} width="48" />
      </AvatarWrapper>
      <Name>{name}</Name>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
